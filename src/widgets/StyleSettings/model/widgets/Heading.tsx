import { SelectorEditor } from 'entities/editor/Selector';
import { NumberType, ObjectType, IMetaEditorProperties, StringType } from 'shared/types/meta';

const getItem = (value: number) => {
    return {
        id: value + '',
        value,
        title: value + '',
    };
};

const ITEMS = [
    getItem(10),
    getItem(12),
    getItem(14),
    getItem(16),
    getItem(18),
    getItem(20),
    getItem(22),
    getItem(24),
    getItem(26),
    getItem(28),
    getItem(30),
    getItem(32),
];

const HeadingMeta = ObjectType.id('heading1')
    .title('Заголовок 1')
    .attributes({
        size: NumberType.id('size')
            .title('Размер')
            .defaultValue(14)
            .editor({
                component: SelectorEditor,
                properties: {
                    items: ITEMS,
                    label: 'Размер',
                },
            }),
        alignment: StringType.id('string')
            .title('Выравнивание')
            .editor({
                component: SelectorEditor,
                properties: {
                    items: [
                        {
                            id: 'left',
                            value: 'left',
                            title: 'Слева',
                        },
                        {
                            id: 'center',
                            value: 'center',
                            title: 'По центру',
                        },
                        {
                            id: 'right',
                            value: 'right',
                            title: 'Справа',
                        },
                    ],
                    label: 'Выравнивание',
                },
            }),
    });

export const HeadingMeta1 = HeadingMeta.id('h1').title('Заголовок 1');
export const HeadingMeta2 = HeadingMeta.id('h2').title('Заголовок 2');
export const HeadingMeta3 = HeadingMeta.id('h3').title('Заголовок 3');
export const HeadingMeta4 = HeadingMeta.id('h4').title('Заголовок 4');
export const HeadingMeta5 = HeadingMeta.id('h5').title('Заголовок 5');
export const HeadingMeta6 = HeadingMeta.id('h6').title('Заголовок 6');
