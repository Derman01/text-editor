import { ObjectType } from 'shared/types/meta';
import { TextStyleMeta } from './textStyle/TextStyleMeta';
import { TitleRuleMeta } from './titleRules/TitleRulesMeta';

const HeadingMeta = ObjectType.id('heading1').title('Заголовок 1').attributes({
    textStyle: TextStyleMeta,
    rules: TitleRuleMeta,
});

export const HeadingMeta1 = HeadingMeta.id('h1').title('Заголовок 1');
export const HeadingMeta2 = HeadingMeta.id('h2').title('Заголовок 2');
export const HeadingMeta3 = HeadingMeta.id('h3').title('Заголовок 3');
export const HeadingMeta4 = HeadingMeta.id('h4').title('Заголовок 4');
export const HeadingMeta5 = HeadingMeta.id('h5').title('Заголовок 5');
export const HeadingMeta6 = HeadingMeta.id('h6').title('Заголовок 6');
