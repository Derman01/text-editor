import { IPageDataInterface, IPageData } from './model/Page';
import { IParagraphInterface, IParagraphData } from './model/Paragraph';
import { ITitleDataInterface, ITitleData } from './model/Titles';
import { IBaseData } from './model/base';

interface ITemplateData
    extends IBaseData,
        IPageDataInterface,
        IParagraphInterface,
        ITitleDataInterface {}

export type {
    ITemplateData,
    IParagraphInterface,
    ITitleDataInterface,
    IPageDataInterface,
    IPageData,
    IParagraphData,
    ITitleData,
};
export type { ITextStyleInterface } from './model/TextStyle';
