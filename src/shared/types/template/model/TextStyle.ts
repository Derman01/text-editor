interface ITextStyleInterface {
    textStyle: ITextStyleData;
}

interface ITextStyleData {
    id: string;
    name: string;
    rules: ITextStyleRules;
}

interface ITextStyleRules {
    alignment: 'left' | 'right' | 'center';
    bold: boolean;
    color: '#000000';
    font: 'Times New Roman';
    /**
     * Отступ слева
     */
    indent: number;
    italic: false;
    // TODO что такое
    keepLines: true;
    lineSpacing: 1.15;
    size: 13;
    underline: false;
    wordWrap: true;
}

export type { ITextStyleData, ITextStyleRules, ITextStyleInterface };
