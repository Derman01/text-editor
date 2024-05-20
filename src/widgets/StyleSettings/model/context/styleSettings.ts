import { CSSProperties } from 'react';
import { ITextStyleInterface, ITitleData } from 'shared/types/template';
import { ISettings } from './const';

export const getStyleFromSettings = (settings: ISettings): CSSProperties => {
    const widgetsTextStyle = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];
    const widgetsTitle = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const widgetTextStyleProperties = widgetsTextStyle.reduce((old, key) => {
        return {
            ...old,
            ...getTextStyleProperties(settings, key as keyof ISettings),
        };
    }, {}) as CSSProperties;

    const widgetTitleProperties = widgetsTitle.reduce((old, key) => {
        return {
            ...old,
            ...getTitleRulesProperties(settings, key as keyof ISettings),
        };
    }, {}) as CSSProperties;

    const pageProperties = getPageProperties(settings.page);

    return {
        ...widgetTextStyleProperties,
        ...widgetTitleProperties,
        ...pageProperties,
    };
};

const getTextStyleProperties = (state: ISettings, key: keyof ISettings) => {
    const value = state[key] as ITextStyleInterface;
    return {
        [`--widget-${key}-fontSize`]: `${value.textStyle.rules.size}pt`,
        [`--widget-${key}-alignment`]: `${value.textStyle.rules.alignment}`,
        [`--widget-${key}-fontFamily`]: `${value.textStyle.rules.font}`,
        [`--widget-${key}-fontBold`]: value.textStyle.rules.bold ? 'bold' : 'normal',
        [`--widget-${key}-indent`]: value.textStyle.rules.indent + 'cm',
    };
};

const getTitleRulesProperties = (state: ISettings, key: keyof ISettings) => {
    const value = state[key] as ITitleData;
    return {
        [`--widget-${key}-textTransform`]: value.rules.capitalisation ? 'uppercase' : 'none',
    };
};

const getPageProperties = (pageSettings: ISettings['page']) => {
    return {
        [`--page-field-left`]: pageSettings.fields.left + 'cm',
        [`--page-field-right`]: pageSettings.fields.right + 'cm',
        [`--page-field-top`]: pageSettings.fields.up + 'cm',
        [`--page-field-bottom`]: pageSettings.fields.down + 'cm',
    };
};
