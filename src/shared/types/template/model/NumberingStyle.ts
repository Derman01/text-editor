import { IBaseData } from './base';

interface INumberingStyleInterface {
    numberingStyle: INumberingStyleData;
}

interface INumberingStyleData extends IBaseData {
    rules: INumberingRules;
}

interface INumberingRules {
    arabicNumbers: false;
    bracketsNeeded: false;
    crossCutting: false;
    endLineDot: false;
    multiLevel: false;
}

export type { INumberingStyleData, INumberingRules, INumberingStyleInterface };
