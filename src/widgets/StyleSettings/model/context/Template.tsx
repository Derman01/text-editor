import { CSSProperties, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ITemplateData, ITitleData } from 'shared/types/template';
import './style.css';
import { api } from 'shared/api';

interface ITemplateFormat {
    h1: ITitleData;
    h2: ITitleData;
    h3: ITitleData;
    h4: ITitleData;
    h5: ITitleData;
    h6: ITitleData;
}

export interface ITemplateContext {
    template: ITemplateFormat;
    update: (newTemplate: Partial<ITemplateContext['template']>) => void;
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
        api;
    };

    const value: ITemplateContext = useMemo(
        () => ({
            template: state,
            update,
            save,
        }),
        [state, update]
    );

    const styles: CSSProperties = useMemo(() => {
        const getStyleWidget = (key: keyof ITemplateFormat) => {
            return {
                [`--widget-${key}-fontSize`]: `${state[key].size}pt`,
                [`--widget-${key}-alignment`]: `${state[key].alignment}`,
                [`--widget-${key}-fontFamily`]: `${state[key].font}`,
                [`--widget-${key}-fontBold`]: state[key].bold ? 'bold' : 'normal',
                [`--widget-${key}-textTransform`]: state[key].capitalisation ? 'uppercase' : 'none',
            };
        };

        return Object.keys(state).reduce((old, key) => {
            return {
                ...old,
                ...getStyleWidget(key as keyof ITemplateFormat),
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

const getValueMeta = (data: ITemplateData): ITemplateFormat => {
    const titles = data.titles;

    const h6: ITemplateFormat['h6'] = {
        depth: 5,
        name: 'Заголовок 6',
        rules: {
            capitalisation: true,
            endLineDot: true,
            newPageWrap: true,
        },
        id: '',
        textStyle: {
            id: '',
            name: '',
            rules: {
                alignment: 'center',
                bold: true,
                color: '#000000',
                font: 'Times New Roman',
                indent: 0,
                italic: false,
                keepLines: true,
                lineSpacing: 1.15,
                size: 14,
                underline: false,
                wordWrap: true,
            },
        },
    };
    const heading: ITemplateFormat = titles.reduce(
        (old, current) => {
            return {
                ...old,
                [`h${current.depth + 1}`]: current as ITitleData,
            };
        },
        { h6 }
    ) as ITemplateFormat;

    return {
        ...heading,
    };
};
