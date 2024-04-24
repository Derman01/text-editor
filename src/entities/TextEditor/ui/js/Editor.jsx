import { createEditor } from '../../model/createEditor';
import React, { useCallback, useState } from 'react';
import { Slate, Editable, useSlate } from 'slate-react';

const defaultInitialValue = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
];

const EditorEditable = function (props) {
    const { onKeyDown, renderLeaf, renderElements } = props;

    const editor = useSlate();

    editor.insertBreak = useCallback(() => {
        editor.insertNode({
            type: 'paragraph',
            children: [{ text: '', placeholder: 'Параграф' }],
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
        <Editable
            onKeyDown={onKeyDownHandler}
            renderElement={renderElementHandler}
            renderLeaf={renderLeafHandler}
            spellCheck
            autoFocus
        />
    );
};

const EditorProvider = function ({ initialValue = defaultInitialValue, children }) {
    const [editor] = useState(createEditor());
    return <Slate editor={editor} initialValue={initialValue} children={children} />;
};

const DefaultElement = (props) => {
    return <p {...props.attributes}>{props.children}</p>;
};

const Leaf = (props) => {
    return <span {...props.attributes}>{props.children}</span>;
};

export { EditorProvider, EditorEditable };
