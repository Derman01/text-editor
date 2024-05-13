import { ObjectType } from 'shared/types/meta';
import { TextStyleMeta } from './textStyle/TextStyleMeta';

export const ParagraphMeta = ObjectType.id('p').title('Параграф').attributes({
    textStyle: TextStyleMeta,
});
