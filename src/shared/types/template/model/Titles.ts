import { ITextStyleData, ITextStyleInterface } from './TextStyle';
import { IBaseData } from './base';

interface ITitleData extends IBaseData, ITextStyleInterface, ITitleRulesInterface {
    depth: 0 | 1 | 2 | 3 | 4;
}

interface ITitleRules {
    capitalisation: true;
    endLineDot: true;
    newPageWrap: true;
}

interface ITitleRulesInterface {
    rules: ITitleRules;
}

interface ITitleDataInterface {
    titles: ITitleData[];
}

export type { ITitleData, ITitleRules, ITitleRulesInterface, ITitleDataInterface };
