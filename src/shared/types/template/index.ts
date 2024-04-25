import { IPageDataInterface } from './model/Page';
import { IParagraphInterface } from './model/Paragraph';
import { ITitleDataInterface } from './model/Titles';
import { IBaseData } from './model/base';

interface ITemplateData
    extends IBaseData,
        IPageDataInterface,
        IParagraphInterface,
        ITitleDataInterface {}

export type { ITemplateData, IParagraphInterface, ITitleDataInterface, IPageDataInterface };
