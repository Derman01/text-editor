import { ObjectMeta } from './ObjectMeta';
import { Meta } from './baseMeta';

export const ObjectType = new ObjectMeta<object>({
    id: 'object',
    type: 'object'
});

export const NumberType = new Meta<number>({
    id: 'number',
});

export const StringType = new Meta<string>({
    id: 'string',
});
