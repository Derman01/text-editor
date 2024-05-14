import { BooleanEditor } from 'entities/editor/Boolean';
import { ObjectMeta } from './ObjectMeta';
import { Meta } from './baseMeta';
import { NumberEditor } from 'entities/editor/Number';

export const ObjectType = new ObjectMeta<object>({
    id: 'object',
    type: 'object',
});

export const BooleanType = new ObjectMeta<boolean>({
    id: 'boolean',
    editor: {
        component: BooleanEditor,
        properties: {},
    },
});

export const NumberType = new Meta<number>({
    id: 'number',
    editor: {
        component: NumberEditor,
        properties: {},
    },
});

export const StringType = new Meta<string>({
    id: 'string',
});
