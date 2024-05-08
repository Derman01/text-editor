import { CSSProperties, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ITemplateData } from 'shared/types/template';
import './style.css';
import { api } from 'shared/api';

type TypeHeading = ITemplateData['titles'][0]['textStyle']['rules'] &
    ITemplateData['titles'][0]['rules'];

interface ITemplateFormat {
    h1: TypeHeading;
    h2: TypeHeading;
    h3: TypeHeading;
    h4: TypeHeading;
    h5: TypeHeading;
    h6: TypeHeading;
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
        api
    };

    const value: ITemplateContext = useMemo(
        () => ({
            template: state,
            update,
            save
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
    const heading = titles.reduce(
        (old, current) => {
            return {
                ...old,
                [`h${current.depth + 1}`]: {
                    ...current.rules,
                    ...current.textStyle.rules,
                },
            };
        },
        {
            h6: {
                ...titles[0].rules,
                ...titles[0].textStyle.rules,
            },
        }
    ) as unknown as ITemplateFormat;

    return {
        ...heading,
    };
};
