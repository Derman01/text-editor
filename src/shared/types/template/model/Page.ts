import { INumberingStyleInterface } from './NumberingStyle';
import { IBaseData } from './base';

interface IPageData
    extends IBaseData,
        IFieldInterface,
        IPageRulesInterface,
        INumberingStyleInterface {}

interface IFields {
    up: number;
    down: number;
    left: number;
    right: number;
}

interface IFieldInterface {
    fields: IFields;
}
interface IPageRules {
    format: 'A4';
    /**
     * Нумерация страниц с первой страницы
     */
    isFirstListNumbered: boolean;
    /**
     * Ориентация вертикальная
     */
    orientationVertical: boolean;
}

interface IPageRulesInterface {
    rules: IPageRules;
}

interface IPageDataInterface {
    page: IPageData;
}

export type { IFields, IPageData, IPageRules, IPageDataInterface };
