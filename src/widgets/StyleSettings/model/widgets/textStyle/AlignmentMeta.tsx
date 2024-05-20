import { SelectorEditor } from 'entities/editor/Selector';
import { StringType } from 'shared/types/meta';

export const AlignmentMeta = StringType.id('string')
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
                    id: 'justify',
                    value: 'justify',
                    title: 'По ширине',
                },
                {
                    id: 'right',
                    value: 'right',
                    title: 'Справа',
                },
            ],
            label: 'Выравнивание',
        },
    });
