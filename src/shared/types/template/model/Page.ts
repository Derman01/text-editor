import { IBaseData } from './base';

interface IPageData extends IBaseData {
    fields: IFields;
    rules: IPageRules;
    // TODO
    // numberingStyle: INumberingStyle
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

interface IFields {
    up: number;
    down: number;
    left: number;
    right: number;
}

interface IPageDataInterface {
    page: IPageData;
}

export type { IFields, IPageData, IPageRules, IPageDataInterface };
