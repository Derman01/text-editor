import { ObjectType, NumberType } from 'shared/types/meta';

const PageField = ObjectType.id('fields')
    .title('Поля (cм)')
    .attributes({
        left: NumberType.id('left').title('Слева'),
        right: NumberType.id('right').title('Справа'),
        up: NumberType.id('up').title('Сверху'),
        down: NumberType.id('down').title('Снизу'),
    });

export const PageMeta = ObjectType.id('page').title('Параграф').attributes({
    fields: PageField,
});
