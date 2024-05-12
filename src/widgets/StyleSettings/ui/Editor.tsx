import { Box, Typography } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { ObjectMeta, ObjectType } from 'shared/types/meta';

interface IProps {
    meta: typeof ObjectType;
    value: object;
    onChange: (newValue: IProps['value']) => void;
}

const Editor = function (props: IProps): JSX.Element {
    const attrs = useMemo(() => props.meta.getAttributes(), [props.meta]);
    const attrsArray = useMemo(
        () =>
            Object.entries(attrs).map(([name, value]: [string, ObjectMeta]) => {
                return {
                    key: name,
                    meta: value,

                    ...value,
                };
            }),
        [props.meta]
    );

    const onChangeHandler = useCallback(
        (name: string, newValue: unknown) => {
            props.onChange({
                ...props.value,
                [name]: newValue,
            });
        },
        [props.onChange, props.value]
    );

    return (
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'}>
            {attrsArray.map((attr) => {
                if (attr.meta.getType() === 'object') {
                    return (
                        <Box key={attr.key} width={'100%'} gridColumn={'span 2'}>
                            {attr.meta.getTitle() && (
                                <Typography fontWeight={'bold'}>{attr.meta.getTitle()}</Typography>
                            )}
                            <Editor
                                meta={attr.meta}
                                value={props.value[attr.key]}
                                onChange={(newValue) => {
                                    onChangeHandler(attr.key, {
                                        ...props.value[attr.key],
                                        ...newValue,
                                    });
                                }}
                            />
                        </Box>
                    );
                }
                return (
                    <EditorAttr
                        meta={attr.meta}
                        value={props.value[attr.key]}
                        name={attr.key}
                        key={attr.key}
                        onChange={onChangeHandler}
                    />
                );
            })}
        </Box>
    );
};

const EditorAttr = function ({
    name,
    onChange,
    value,
    meta,
}: {
    name: string;
    meta: ObjectMeta;
    value: unknown;
    onChange: (name: string, newValue: unknown) => void;
}): JSX.Element {
    const editor = useMemo(() => {
        return meta.getEditor();
    }, []);

    const onChangeHandler = useCallback(
        (newValue) => {
            onChange(name, newValue);
        },
        [onChange, name]
    );

    const EditorComponent = editor.component;
    const editorProps = editor.properties;

    return (
        <>
            <Typography>{meta.getTitle()}</Typography>
            <EditorComponent {...editorProps} value={value} onChange={onChangeHandler} />
        </>
    );
};

export { Editor, EditorAttr };
