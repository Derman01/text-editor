import { CSSProperties, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ITemplateData } from 'shared/types/template';
import './style.css';
import { api } from 'shared/api';
import { IBaseData } from 'shared/types/template/model/base';
import { DEFAULT_SETTINGS, ISettings } from './const';

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
            ...template,
            ...info,
            ...getRequestFormat(state),
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
        const getStyleWidget = (key: keyof ISettings) => {
            return {
                [`--widget-${key}-fontSize`]: `${state[key].textStyle.rules.size}pt`,
                [`--widget-${key}-alignment`]: `${state[key].textStyle.rules.alignment}`,
                [`--widget-${key}-fontFamily`]: `${state[key].textStyle.rules.font}`,
                [`--widget-${key}-fontBold`]: state[key].textStyle.rules.bold ? 'bold' : 'normal',
                // [`--widget-${key}-textTransform`]: state[key]..capitalisation ? 'uppercase' : 'none',
            };
        };

        return Object.keys(state).reduce((old, key) => {
            return {
                ...old,
                ...getStyleWidget(key as keyof ISettings),
            };
        }, {}) as CSSProperties;
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

const getRequestFormat = (data: ISettings): Partial<ITemplateData> => {
    const titles = [data.h1, data.h2, data.h3, data.h4, data.h5, data.h6];
    return {
        titles,
        paragraph: data.p,
    };
};
