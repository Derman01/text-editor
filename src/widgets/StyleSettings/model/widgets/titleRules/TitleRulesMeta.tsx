// "capitalisation": false,
// "endLineDot": true,
// "newPageWrap": true

import { BooleanType, ObjectType } from 'shared/types/meta';

export const TitleRuleMeta = ObjectType.id('rules')
    .title('Правила')
    .attributes({
        capitalisation: BooleanType.id('capitalisation').title('Большой регистр'),
    });
