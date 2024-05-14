import { NumberEditor } from 'entities/editor/Number';
import { StringType } from 'shared/types/meta';

export const IndentMeta = StringType.id('string')
    .title('Абзацный отступ (см)')
    .editor({
        component: NumberEditor,
        properties: {
            maxValue: 10,
            minValue: 0,
        },
    });
