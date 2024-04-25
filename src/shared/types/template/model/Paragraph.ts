import { ITextStyleInterface } from './TextStyle';
import { IBaseData } from './base';

interface IParagraphData extends ITextStyleInterface, IBaseData {}

interface IParagraphInterface {
    paragraph: IParagraphData;
}

export type { IParagraphData, IParagraphInterface };
