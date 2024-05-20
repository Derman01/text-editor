import { NumberEditor } from 'entities/editor/Number';
import { StringType } from 'shared/types/meta';

export const LineHeightMeta = StringType.id('lineHeight')
    .title('Межстрочный оступ')
    .editor({
        component: NumberEditor,
        properties: {
            maxValue: 10,
            minValue: 0,
        },
    });
