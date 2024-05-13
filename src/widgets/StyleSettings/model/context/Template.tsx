import { CSSProperties, createContext, useCallback, useContext, useMemo, useState } from 'react';
import {
    IParagraphData,
    ITemplateData,
    ITextStyleInterface,
    ITitleData,
} from 'shared/types/template';
import './style.css';
import { api } from 'shared/api';
import { IBaseData } from 'shared/types/template/model/base';
import { DEFAULT_SETTINGS, ISettings, convertFormatRequest } from './const';
import { convertCamelCaseToPep } from 'shared/lib/converter';

export interface ITemplateContext {
    info: IBaseData;
    template: ISettings;
    update: (newTemplate: Partial<ITemplateData>) => void;
    updateInfo: (newInfo: Partial<IBaseData>) => void;
    save: () => void;
}

const TemplateContext = createContext<ITemplateContext>({});

const TemplateProvider = function ({
    children,
    template,
}: {
    children: JSX.Element;
    template: ITemplateData;
}): JSX.Element {
    const [state, updateState] = useState(getValueMeta(template));
    const [info, setInfo] = useState<IBaseData>({
        id: template.id,
        name: template.name,
    });

    const updateInfo = useCallback((newInfo: Partial<IBaseData>) => {
        setInfo((oldInfo) => ({
            ...oldInfo,
            ...newInfo,
        }));
    }, []);

    const update: ITemplateContext['update'] = useCallback(
        (partial) => {
            updateState((old) => ({
                ...old,
                ...partial,
            }));
        },
        [updateState]
    );

    const save = () => {
        api.templates.update(info.id, {
            ...convertCamelCaseToPep(template),
            ...info,
            ...convertFormatRequest(state),
        });
    };

    const value: ITemplateContext = useMemo(
        () => ({
            template: state,
            update,
            save,
            info,
            updateInfo,
        }),
        [state, info, update, updateInfo]
    );

    const styles: CSSProperties = useMemo(() => {
        const widgetsTextStyle = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
        const widgetsTitle = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

        const widgetTextStyleProperties = widgetsTextStyle.reduce((old, key) => {
            return {
                ...old,
                ...getTextStyleProperties(state, key as keyof ISettings),
            };
        }, {}) as CSSProperties;

        const widgetTitleProperties = widgetsTitle.reduce((old, key) => {
            return {
                ...old,
                ...getTitleRulesProperties(state, key as keyof ISettings),
            };
        }, {}) as CSSProperties;

        return {
            ...widgetTextStyleProperties,
            ...widgetTitleProperties,
        };
    }, [state]);

    return (
        <TemplateContext.Provider value={value}>
            <div style={styles}>{children}</div>
        </TemplateContext.Provider>
    );
};

const useTemplateContext = () => useContext(TemplateContext);

export { TemplateProvider, useTemplateContext };

const getValueMeta = (data: ITemplateData): ISettings => {
    const { titles, paragraph } = data;
    const settingsTitles = titles.reduce((old, current) => {
        return {
            ...old,
            ['h' + current.depth]: current,
        };
    }, {}) as Partial<ISettings>;

    const settings: ISettings = {
        ...DEFAULT_SETTINGS,
        ...settingsTitles,
        p: paragraph,
    };

    return settings;
};

const getTextStyleProperties = (state: ISettings, key: keyof ISettings) => {
    const value = state[key] as ITextStyleInterface;
    return {
        [`--widget-${key}-fontSize`]: `${value.textStyle.rules.size}pt`,
        [`--widget-${key}-alignment`]: `${value.textStyle.rules.alignment}`,
        [`--widget-${key}-fontFamily`]: `${value.textStyle.rules.font}`,
        [`--widget-${key}-fontBold`]: value.textStyle.rules.bold ? 'bold' : 'normal',
    };
};

const getTitleRulesProperties = (state: ISettings, key: keyof ISettings) => {
    const value = state[key] as ITitleData;
    return {
        [`--widget-${key}-textTransform`]: value.rules.capitalisation ? 'capitalize' : 'none',
    };
};
