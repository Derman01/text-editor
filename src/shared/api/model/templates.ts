import { ITemplateData } from 'shared/types/template';
import { $api } from './const';

const DEFAULT_TEMPLATE = {
    titles: [
        {
            name: 'Заголовок 1 уровня',
            depth: 1,
            rules: {
                capitalisation: false,
                end_line_dot: true,
                new_page_wrap: true,
            },
            text_style: {
                name: 'Стиль заголовка 1',
                rules: {
                    color: '#000000', //есть проверка на HEX
                    font: 'Times New Roman',
                    size: 32,
                    italic: false,
                    underline: false,
                    bold: true,
                    alignment: 'center',
                    keep_lines: true,
                    word_wrap: true,
                    indent: 1.25,
                    line_spacing: 1.15,
                },
            },
            numbering_style: {
                name: 'Стиль нумеризации',
                rules: {
                    multi_level: false,
                    arabic_numbers: false,
                    end_line_dot: false,
                    cross_cutting: false,
                    brackets_needed: false,
                },
            },
        },
        {
            name: 'Заголовок 2 уровня',
            depth: 2,
            rules: {
                capitalisation: false,
                end_line_dot: true,
                new_page_wrap: true,
            },
            text_style: {
                name: 'Стиль заголовка 2',
                rules: {
                    color: '#000000', //есть проверка на HEX
                    font: 'Times New Roman',
                    size: 24,
                    italic: false,
                    underline: false,
                    bold: false,
                    alignment: 'left',
                    keep_lines: true,
                    word_wrap: true,
                    indent: 1.25,
                    line_spacing: 1.15,
                },
            },
            numbering_style: {
                name: 'Стиль нумеризации',
                rules: {
                    multi_level: false,
                    arabic_numbers: false,
                    end_line_dot: false,
                    cross_cutting: false,
                    brackets_needed: false,
                },
            },
        },
    ],
    page: {
        name: 'Обычная страница',
        rules: {
            format: 'A4',
            orientation_vertical: true,
            is_first_list_numbered: false,
        },
        fields: {
            left: 0.3,
            up: 0.2,
            right: 0.15,
            down: 0.2,
        },
        numbering_style: {
            name: 'Стиль нумеризации',
            rules: {
                multi_level: false,
                arabic_numbers: false,
                end_line_dot: false,
                cross_cutting: false,
                brackets_needed: false,
            },
        },
    },
    table: {
        name: 'Обычная таблица',
        rules: {
            can_multi_line: true,
        },
        text_style: {
            name: 'Стиль текста',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 14,
                italic: false,
                underline: false,
                bold: false,
                alignment: 'left',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        title_text_style: {
            name: 'Стиль заголовка',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 18,
                italic: false,
                underline: false,
                bold: true,
                alignment: 'center',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        numbering_style: {
            name: 'Стиль нумеризации',
            rules: {
                multi_level: false,
                arabic_numbers: false,
                end_line_dot: false,
                cross_cutting: false,
                brackets_needed: false,
            },
        },
    },
    paragraph: {
        name: 'Обычный параграф',
        text_style: {
            name: 'Стиль текста',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 14,
                italic: false,
                underline: false,
                bold: false,
                alignment: 'left',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
    },
    illustration: {
        name: 'Обычная иллюстрация',
        text_style: {
            name: 'Стиль текста',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 14,
                italic: false,
                underline: false,
                bold: false,
                alignment: 'center',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        numbering_style: {
            name: 'Стиль нумеризации',
            rules: {
                multi_level: false,
                arabic_numbers: false,
                end_line_dot: false,
                cross_cutting: false,
                brackets_needed: false,
            },
        },
    },
    formula: {
        name: 'Обычная формула',
        text_style: {
            name: 'Стиль текста',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 14,
                italic: false,
                underline: false,
                bold: false,
                alignment: 'center',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        numbering_style: {
            name: 'Стиль нумеризации',
            rules: {
                multi_level: false,
                arabic_numbers: false,
                end_line_dot: false,
                cross_cutting: false,
                brackets_needed: false,
            },
        },
    },
    listing: {
        name: 'Обычный листинг',
        text_style: {
            name: 'Стиль текста',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 12,
                italic: true,
                underline: false,
                bold: false,
                alignment: 'left',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        title_text_style: {
            name: 'Стиль заголовка',
            rules: {
                color: '#000000', //есть проверка на HEX
                font: 'Times New Roman',
                size: 18,
                italic: false,
                underline: false,
                bold: true,
                alignment: 'center',
                keep_lines: true,
                word_wrap: true,
                indent: 1.25,
                line_spacing: 1.15,
            },
        },
        numbering_style: {
            name: 'Стиль нумеризации',
            rules: {
                multi_level: false,
                arabic_numbers: false,
                end_line_dot: false,
                cross_cutting: false,
                brackets_needed: false,
            },
        },
    },
};

const update = (id: string, data: ITemplateData) => {
    return $api.put(`/templates/${id}`, {
        ...data,
        id: undefined,
        is_public: undefined,
    });
};

const getAll = <T>() => {
    return ($api.get('/templates') as Promise<{ templates: T }>).then((data) => {
        return data.templates;
    }) as Promise<T>;
};

const getUsers = <T>() => {
    return ($api.get('/templates/own') as Promise<{ templates: T }>).then((data) => {
        return data.templates;
    }) as Promise<T>;
};

const create = <T>() => {
    const dateString = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    return $api.post('/templates', {
        ...DEFAULT_TEMPLATE,
        name: 'Новый шаблон ' + dateString,
    }) as Promise<T>;
};

const remove = (id: string | number) => {
    return $api.delete('/templates/' + id);
};

const getOne = <T>(id: string | number) => {
    return $api.get(`/templates/${id}`) as Promise<T>;
};

export const templatesApi = {
    getUsers,
    getAll,
    create,
    remove,
    getOne,
    update,
};
