import { ObjectType } from 'shared/types/meta';
import { FontSizeMeta } from './FontSizeMeta';
import { AlignmentMeta } from './AlignmentMeta';
import { FontFamilyMeta } from './FontFamily';
import { IndentMeta } from './IndentMeta';
import { BoldMeta } from './BoldMeta';
import { LineHeightMeta } from './LineHeightMeta';

export const RulesMeta = ObjectType.id('rules').title('').attributes({
    size: FontSizeMeta,
    alignment: AlignmentMeta,
    font: FontFamilyMeta,
    indent: IndentMeta,
    bold: BoldMeta,
    lineSpacing: LineHeightMeta,
});

export const TextStyleMeta = ObjectType.id('textStyle').title('Текстовые стили').attributes({
    rules: RulesMeta,
});
