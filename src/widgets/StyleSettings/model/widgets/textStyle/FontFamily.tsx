import { SelectorEditor } from 'entities/editor/Selector';
import { StringType } from 'shared/types/meta';

export const FontFamilyMeta = StringType.id('string')
    .title('Шрифт')
    .editor({
        component: SelectorEditor,
        properties: {
            items: [
                {
                    id: '1',
                    value: 'Times New Roman',
                    title: 'Times New Roman',
                },
                {
                    id: '2',
                    value: 'Arial',
                    title: 'Arial',
                },
            ],
            label: 'Выравнивание',
        },
    });
