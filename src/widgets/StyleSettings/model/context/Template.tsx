import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ITemplateData } from 'shared/types/template';

interface ITemplateFormat {
    heading1: ITemplateData['titles'][0]['textStyle']['rules'] &
        ITemplateData['titles'][0]['rules'];
}

interface ITemplateContext {
    template: ITemplateFormat;
    update: (newTemplate: Partial<ITemplateContext['template']>) => void;
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

    const value: ITemplateContext = useMemo(
        () => ({
            template: state,
            update,
        }),
        [state, update]
    );

    return <TemplateContext.Provider value={value} children={children} />;
};

const useTemplateContext = () => useContext(TemplateContext);

export { TemplateProvider, useTemplateContext };

const getValueMeta = (data: ITemplateData): ITemplateFormat => {
    const heading1: ITemplateFormat['heading1'] = {
        ...data.titles[0].rules,
        ...data.titles[0].textStyle.rules,
    };

    return {
        heading1,
    };
};
