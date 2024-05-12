import { NumberEditor } from 'entities/editor/Number';
import { SelectorEditor } from 'entities/editor/Selector';
import { StringType } from 'shared/types/meta';

export const IndentMeta = StringType.id('string')
    .title('Абзацный отступ')
    .editor({
        component: NumberEditor,
        properties: {
            maxValue: 10,
            minValue: 0,
        },
    });
