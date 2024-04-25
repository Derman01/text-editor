import { SelectorEditor } from 'entities/editor/Selector';
import { NumberType, ObjectType, IMetaEditorProperties, StringType } from 'shared/types/meta';

const StringEditor = () => {
    return <div></div>;
};

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

export { HeadingMeta };
