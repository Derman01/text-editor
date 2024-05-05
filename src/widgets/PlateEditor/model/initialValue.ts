export const initialValue = [
    {
        type: 'p',
        children: [
            {
                text: 'Обычный текст с ',
            },
            {
                text: 'жирным текстом',
                bold: true,
            },
            {
                text: ' ',
            },
            {
                text: 'с курсивом ',
                italic: true,
            },
            {
                text: 'Вторая строка',
            },
        ],
    },
    {
        type: 'h1',
        children: [
            {
                text: 'Заголовок 1',
            },
        ],
    },
    {
        type: 'h2',
        children: [
            {
                text: 'Заголовок 2',
            },
        ],
    },
    {
        type: 'h3',
        children: [
            {
                text: 'Заголовок 3',
            },
        ],
    },
    {
        type: 'h4',
        children: [
            {
                text: 'Заголовок 4',
            },
        ],
    },
    {
        type: 'h5',
        children: [
            {
                text: 'Заголовок 5',
            },
        ],
    },
    {
        type: 'h6',
        children: [
            {
                text: 'Заголовок 6',
            },
        ],
    },
    {
        type: 'p',
        children: [
            {
                text: 'Новая строка',
            },
        ],
    },
    {
        type: 'ul',
        children: [
            {
                type: 'li',
                children: [
                    {
                        type: 'lic',
                        children: [
                            {
                                text: 'Обычный список 1 пункт',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'li',
                children: [
                    {
                        type: 'lic',
                        children: [
                            {
                                text: 'Обычный список 2 пункт',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'p',
        children: [
            {
                text: 'Новая строка',
            },
        ],
    },
    {
        type: 'ol',
        children: [
            {
                type: 'li',
                children: [
                    {
                        type: 'lic',
                        children: [
                            {
                                text: 'Нумерованный список 1 пункт',
                            },
                        ],
                    },
                ],
            },
            {
                type: 'li',
                children: [
                    {
                        type: 'lic',
                        children: [
                            {
                                text: 'Нумерованный список 2 пункт',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'p',
        children: [
            {
                text: '',
            },
        ],
    },
    {
        type: 'table',
        children: [
            {
                type: 'tr',
                children: [
                    {
                        type: 'td',
                        attributes: {
                            colspan: '1',
                            rowspan: '1',
                        },
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        text: 'Таблица 1.1',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'td',
                        attributes: {
                            colspan: '1',
                            rowspan: '1',
                        },
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        text: 'Таблица 1.2',
                                    },
                                ],
                            },
                        ],
                        borders: {
                            bottom: {
                                size: 1,
                            },
                        },
                    },
                ],
            },
            {
                type: 'tr',
                children: [
                    {
                        type: 'td',
                        attributes: {
                            colspan: '1',
                            rowspan: '1',
                        },
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        text: 'Таблица 2.1',
                                    },
                                ],
                            },
                        ],
                        borders: {
                            right: {
                                size: 1,
                            },
                        },
                    },
                    {
                        type: 'td',
                        attributes: {
                            colspan: '1',
                            rowspan: '1',
                        },
                        children: [
                            {
                                type: 'p',
                                children: [
                                    {
                                        text: 'Таблица 2.2',
                                    },
                                ],
                            },
                        ],
                        borders: {
                            bottom: {
                                size: 1,
                            },
                            right: {
                                size: 1,
                            },
                        },
                    },
                ],
                size: 44,
            },
        ],
        colSizes: [259, 0],
    },
];
