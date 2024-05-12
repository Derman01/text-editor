import { ObjectType } from 'shared/types/meta';
import { TextStyleMeta } from './TextStyleMeta';

export const ParagraphMeta = ObjectType.id('p').title('Параграф').attributes({
    textStyle: TextStyleMeta,
});
