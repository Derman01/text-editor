import { convertCamelCaseToPep } from 'shared/lib/converter';
import { IPageData, IParagraphData, ITemplateData, ITitleData } from 'shared/types/template';

export interface ISettings {
    h1: ITitleData;
    h2: ITitleData;
    h3: ITitleData;
    h4: ITitleData;
    h5: ITitleData;
    h6: ITitleData;
    p: IParagraphData;
    page: IPageData;
    illustration: object;
    formula: object;
    listing: object;
    table: object;
}

const h1: ISettings['h1'] = {
    id: undefined,
    depth: 1,
    name: 'Заголовок первого уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 1',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};

const h2: ISettings['h2'] = {
    id: undefined,
    depth: 2,
    name: 'Заголовок второго уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 2',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};
const h3: ISettings['h3'] = {
    id: undefined,
    depth: 3,
    name: 'Заголовок 3 уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 3',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};
const h4: ISettings['h4'] = {
    id: undefined,
    depth: 4,
    name: 'Заголовок 4 уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 4',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};
const h5: ISettings['h5'] = {
    id: undefined,
    depth: 5,
    name: 'Заголовок 5 уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 5',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};
const h6: ISettings['h6'] = {
    id: undefined,
    depth: 6,
    name: 'Заголовок 6 уровня',
    rules: {
        capitalisation: true,
        endLineDot: true,
        newPageWrap: true,
    },
    textStyle: {
        id: undefined,
        name: 'Стиль заголовка 6',
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
    numberingStyle: {
        id: undefined,
        name: 'Стиль нумерации',
        rules: {
            arabicNumbers: false,
            bracketsNeeded: false,
            crossCutting: false,
            endLineDot: false,
            multiLevel: false,
        },
    },
};

const p: ISettings['p'] = {
    id: undefined,
    name: 'Параграф',
    textStyle: {
        id: undefined,
        name: 'Стиль параграфа',
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

const page: ISettings['page'] = {
    name: 'Обычная страница',
    rules: {
        format: 'A4',
        orientationVertical: true,
        isFirstListNumbered: false,
    },
    fields: {
        left: 0.3,
        up: 0.2,
        right: 0.15,
        down: 0.2,
    },

    numberingStyle: {
        id: undefined,
        name: 'Стиль нумеризации',
        rules: {
            multiLevel: false,
            arabicNumbers: false,
            endLineDot: false,
            crossCutting: false,
            bracketsNeeded: false,
        },
    },
};

const table = {
    name: 'Обычная таблица',
    rules: {
        canMultiLine: true,
    },
    textStyle: {
        name: 'Стиль текста',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 14,
            italic: false,
            underline: false,
            bold: false,
            alignment: 'left',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    titleTextStyle: {
        name: 'Стиль заголовка',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 18,
            italic: false,
            underline: false,
            bold: true,
            alignment: 'center',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    numberingStyle: {
        name: 'Стиль нумеризации',
        rules: {
            multiLevel: false,
            arabicNumbers: false,
            endLineDot: false,
            crossCutting: false,
            bracketsNeeded: false,
        },
    },
};
const illustration = {
    name: 'Обычная иллюстрация',
    textStyle: {
        name: 'Стиль текста',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 14,
            italic: false,
            underline: false,
            bold: false,
            alignment: 'center',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    numberingStyle: {
        name: 'Стиль нумеризации',
        rules: {
            multiLevel: false,
            arabicNumbers: false,
            endLineDot: false,
            crossCutting: false,
            bracketsNeeded: false,
        },
    },
};

const formula = {
    name: 'Обычная формула',
    textStyle: {
        name: 'Стиль текста',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 14,
            italic: false,
            underline: false,
            bold: false,
            alignment: 'center',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    numberingStyle: {
        name: 'Стиль нумеризации',
        rules: {
            multiLevel: false,
            arabicNumbers: false,
            endLineDot: false,
            crossCutting: false,
            bracketsNeeded: false,
        },
    },
};

const listing = {
    name: 'Обычный листинг',
    textStyle: {
        name: 'Стиль текста',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 12,
            italic: true,
            underline: false,
            bold: false,
            alignment: 'left',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    titleTextStyle: {
        name: 'Стиль заголовка',
        rules: {
            color: '#000000',
            font: 'Times New Roman',
            size: 18,
            italic: false,
            underline: false,
            bold: true,
            alignment: 'center',
            keepLines: true,
            wordWrap: true,
            indent: 1.25,
            lineSpacing: 1.15,
        },
    },
    numberingStyle: {
        name: 'Стиль нумеризации',
        rules: {
            multiLevel: false,
            arabicNumbers: false,
            endLineDot: false,
            crossCutting: false,
            bracketsNeeded: false,
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
    page,
    illustration,
    formula,
    listing,
    table,
};

export const convertFormatRequest = (data: ISettings): Partial<ITemplateData> => {
    return convertCamelCaseToPep({
        page: data.page,
        illustration,
        formula,
        table,
        listing,
        titles: [data.h1, data.h2, data.h3, data.h4, data.h5, data.h6],
        paragraph: data.p,
    });
};
