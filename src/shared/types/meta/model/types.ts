import { BooleanEditor } from 'entities/editor/Boolean';
import { ObjectMeta } from './ObjectMeta';
import { Meta } from './baseMeta';

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
});

export const StringType = new Meta<string>({
    id: 'string',
});
