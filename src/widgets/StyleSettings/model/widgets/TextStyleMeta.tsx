import { ObjectType } from 'shared/types/meta';
import { FontSizeMeta } from './FontSizeMeta';
import { AlignmentMeta } from './AlignmentMeta';
import { FontFamilyMeta } from './FontFamily';
import { IndentMeta } from './IndentMeta';

export const RulesMeta = ObjectType.id('rules').title('').attributes({
    size: FontSizeMeta,
    alignment: AlignmentMeta,
    font: FontFamilyMeta,
    indent: IndentMeta,
});

export const TextStyleMeta = ObjectType.id('textStyle').title('Текстовые стили').attributes({
    rules: RulesMeta,
});
