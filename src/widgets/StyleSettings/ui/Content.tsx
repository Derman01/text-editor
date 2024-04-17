import { Meta } from 'shared/types/meta';
import { HeadingMeta } from '../model/widgets';
import { useCallback, useState } from 'react';

const metaWidgets = HeadingMeta;

const Editor = function ({
    meta,
    value,
    name,
    onChange,
}: {
    meta: Meta;
    value: unknown;
    name: string;
    onChange: (name: string, value: unknown) => void;
}): JSX.Element {
    const editor = meta.getEditor();
    const onChangeHandler = useCallback((value: unknown) => {
        onChange(name, value);
    }, []);
    return (
        <div key={meta.getId()}>
            {meta.getTitle()}:{' '}
            {<editor.component value={value} onChange={onChangeHandler} {...editor.properties} />}
        </div>
    );
};

const Content = function (): JSX.Element {
    const [value, setValue] = useState({});

    const onChange = useCallback((name: string, value: unknown) => {
        setValue((oldValue) => ({
            ...oldValue,
            [name]: value,
        }));
    }, []);
    return (
        <div>
            Редактирование
            {Object.entries(metaWidgets.getAttributes()).map(([name, meta]) => {
                return (
                    <Editor
                        name={name}
                        key={name}
                        value={value[name]}
                        meta={meta}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
};

export default Content;
