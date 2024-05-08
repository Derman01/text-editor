import { $api } from './const';

const update = (id: string) => {
    return $api.put('/template/' + id, {
        name: 'Обновленный шаблон',
        titles: [
            {
                // ЕСЛИ ID НЕТ В МАССИВЕ, ТО АЛГОРИТМ СОЗДАСТ НОВЫЙ ОБЪЕКТ И ДОБАВИТ ЕГО К ШАБЛОНУ
                name: 'Заголовок 1 уровня',
                depth: 2,
                rules: {
                    capitalisation: false,
                    end_line_dot: true,
                    new_page_wrap: true,
                },
                text_style_id: 3,
                numbering_style_id: 1,
            },
        ],
        page: {
            id: 1, // НАЛИЧИЕ ID В МАССИВЕ ОБНОВИТ СУЩЕСТВУЮЩИЙ ОБЪЕКТ
            name: 'НЕОБЫЧНАЯ страница',
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
            numbering_style_id: 1,
        },
        table: {
            name: 'Обычная таблица',
            rules: {
                can_multi_line: true,
            },
            text_style_id: 1,
            title_text_style_id: 1,
            numbering_style_id: 1,
        },
        paragraph: {
            name: 'Обычный параграф',
            text_style_id: 1,
        },
        illustration: {
            name: 'Обычная иллюстрация',
            text_style_id: 1,
            numbering_style_id: 1,
        },
        formula: {
            name: 'Обычная формула',
            text_style_id: 1,
            numbering_style_id: 1,
        },
        listing: {
            name: 'Обычный листинг',
            text_style_id: 1,
            title_text_style_id: 1,
            numbering_style_id: 1,
        },
    });
};
