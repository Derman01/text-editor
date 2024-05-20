import { CSSProperties, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ITemplateData, ITextStyleInterface, ITitleData } from 'shared/types/template';
import './style.scss';
import { api } from 'shared/api';
import { IBaseData } from 'shared/types/template/model/base';
import { DEFAULT_SETTINGS, ISettings, convertFormatRequest } from './const';
import { convertCamelCaseToPep } from 'shared/lib/converter';
import { getStyleFromSettings } from './styleSettings';
import { convertForRequestText, convertFromRequestText } from './convertFromRequest';

export interface ITemplateContext {
    info: IBaseData;
    template: ISettings;
    update: (newTemplate: Partial<ITemplateData>) => void;
    updateInfo: (newInfo: Partial<IBaseData>) => void;
    saveTemplate: () => void;
    saveDocument: () => void;
    updateText: (data: object[]) => void;
    text: object[];
    downloadDocument: () => void;
}

const TemplateContext = createContext<ITemplateContext>({});

const TemplateProvider = function ({
    documentID,
    children,
    template,
    text,
    documentName,
}: {
    documentID?: string | number;
    children: JSX.Element;
    template: ITemplateData;
    text: object[];
    documentName?: string;
}): JSX.Element {
    const [state, updateState] = useState(getValueMeta(template));
    const [textState, setTextState] = useState(convertFromRequestText(text));
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

    const saveTemplate = () => {
        api.templates.update(info.id, {
            ...convertCamelCaseToPep(template),
            ...info,
            ...convertFormatRequest(state),
        });
    };

    const saveDocument = () => {
        api.documents.saveData(documentID, convertForRequestText(textState));
    };

    const downloadDocument = async () => {
        await api.documents.makeDocx(documentID);
        api.documents.download(documentID, documentName);
    };

    const value: ITemplateContext = useMemo(
        () => ({
            template: state,
            update,
            saveTemplate,
            info,
            updateInfo,
            text: textState,
            updateText: setTextState,
            saveDocument,
            downloadDocument,
        }),
        [state, info, update, updateInfo, textState]
    );

    const styles: CSSProperties = useMemo(() => {
        return getStyleFromSettings(state);
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
    const { titles, paragraph, page } = data;
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
        page,
    };

    return settings;
};
