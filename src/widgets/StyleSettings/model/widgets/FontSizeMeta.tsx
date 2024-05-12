import { SelectorEditor } from 'entities/editor/Selector';
import { NumberType } from 'shared/types/meta';

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

export const FontSizeMeta = NumberType.id('size')
    .title('Размер')
    .defaultValue(14)
    .editor({
        component: SelectorEditor,
        properties: {
            items: ITEMS,
            label: 'Размер',
        },
    });
