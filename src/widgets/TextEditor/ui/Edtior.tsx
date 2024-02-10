import { useMemo, useState } from 'react';
import {
    ITextEditorProps as IBaseEditorProps,
    createTextEditor,
    useEditor,
} from 'entities/TextEditor';
import { demoTextValue } from './const';

interface ITextEditorProps extends IBaseEditorProps<'heading' | 'paragraph'> {}

const TextEditor = createTextEditor<ITextEditorProps>();

const Editor = function () {
    const renderElements = useMemo(
        (): ITextEditorProps['renderElements'] => ({
            heading: (props) => {
                return (
                    <h1
                        {...props.attributes}
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}
                    >
                        {props.children}
                    </h1>
                );
            },
            paragraph: (props) => {
                return (
                    <p
                        {...props.attributes}
                        style={{
                            marginBottom: '10pt',
                            textIndent: '1.25cm',
                        }}
                    >
                        {props.children}
                    </p>
                );
            },
        }),
        []
    );
    const [editor] = useState(() => useEditor());

    return (
        <div
            style={{
                fontFamily: 'Times New Roman',
                lineHeight: '115%',
                fontSize: '14pt',
            }}
        >
            <TextEditor
                editor={editor}
                renderElements={renderElements}
                initialValue={demoTextValue}
            />
        </div>
    );
};

export default Editor;
