import { IParagraphData, ITitleData } from 'shared/types/template';

export interface ISettings {
    h1: ITitleData;
    h2: ITitleData;
    h3: ITitleData;
    h4: ITitleData;
    h5: ITitleData;
    h6: ITitleData;
    p: IParagraphData;
}

const h1: ISettings['h1'] = {
    id: undefined,
    depth: 1,
    name: 'Заголовок первого уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 32,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};

const h2: ISettings['h2'] = {
    id: undefined,
    depth: 2,
    name: 'Заголовок второго уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 28,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};
const h3: ISettings['h3'] = {
    id: undefined,
    depth: 3,
    name: 'Заголовок 3 уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 24,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};
const h4: ISettings['h4'] = {
    id: undefined,
    depth: 4,
    name: 'Заголовок 4 уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 20,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};
const h5: ISettings['h5'] = {
    id: undefined,
    depth: 5,
    name: 'Заголовок 5 уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 16,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};
const h6: ISettings['h6'] = {
    id: undefined,
    depth: 6,
    name: 'Заголовок 6 уровня',
    rules: {
        capitalisation: true,

        
    },
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'center',
            bold: true,
            color: '#000000',
            size: 14,
            font: 'Times New Roman',
            indent: 0,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};

const p: ISettings['p'] = {
    id: undefined,
    name: 'Параграф',
    textStyle: {
        id: undefined,
        name: undefined,
        rules: {
            alignment: 'left',
            bold: false,
            color: '#000000',
            size: 14,
            font: 'Times New Roman',
            indent: 1.25,
            italic: false,
            keepLines: true,
            lineSpacing: 1.5,
            underline: false,
            wordWrap: true,
        },
    },
};

export const DEFAULT_SETTINGS: ISettings = {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
};
