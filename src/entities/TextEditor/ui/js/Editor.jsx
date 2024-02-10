import React, { useCallback, memo, forwardRef } from 'react';
import { Slate, Editable } from 'slate-react';

const defaultInitialValue = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
];

const TextEditor = function (props) {
    const {
        onKeyDown,
        renderLeaf,
        renderElements,
        initialValue = defaultInitialValue,
        editor,
    } = props;

    editor.insertBreak = useCallback(() => {
        editor.insertNode({
            type: 'paragraph',
            children: [{ text: '' }],
        });
    }, [editor]);

    editor.insertSoftBreak = editor.insertBreak;

    const renderLeafHandler = useCallback((props) => {
        if (renderLeaf) {
            return renderLeaf(props);
        }
        return <Leaf {...props} />;
    }, []);

    const onKeyDownHandler = useCallback(
        (...args) => {
            return onKeyDown?.(...args, editor);
        },
        [editor]
    );

    const renderElementHandler = useCallback((props) => {
        if (renderElements?.[props.element.type]) {
            return renderElements[props.element.type](props);
        }
        return <DefaultElement {...props} />;
    }, []);

    return (
        <div>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable
                    onKeyDown={onKeyDownHandler}
                    renderElement={renderElementHandler}
                    renderLeaf={renderLeafHandler}
                />
            </Slate>
        </div>
    );
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
    return <span {...props.attributes}>{props.children}</span>;
};

export default memo(forwardRef(TextEditor));
