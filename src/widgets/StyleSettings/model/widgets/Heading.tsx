import { SelectorEditor } from 'entities/editor/Selector';
import { NumberType, ObjectType, IMetaEditorProperties } from 'shared/types/meta';

const NumberEditor = (props: IMetaEditorProperties<number>) => {
    return (
        <div>
            <SelectorEditor {...props} />
        </div>
    );
};
const StringEditor = () => {
    return <div></div>;
};

const getItem = (value: number) => {
    return {
        id: value + '',
        value,
        title: value + '',
    };
};

const ITEMS = [
    getItem(14),
    getItem(15),
    getItem(16),
    getItem(17),
    getItem(18),
    getItem(19),
    getItem(20),
];

const HeadingMeta = ObjectType.id('heading1')
    .title('Заголовок 1')
    .attributes({
        fontSize: NumberType.id('fontSize')
            .title('Размер')
            .defaultValue(14)
            .editor({
                component: NumberEditor,
                properties: {
                    items: ITEMS,
                    label: 'Размер',
                },
            }),
    });

export { HeadingMeta };
