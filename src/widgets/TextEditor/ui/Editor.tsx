import { Fragment, useCallback, useMemo } from 'react';
import {
    ITextEditorProps as IBaseEditorProps,
    createTextEditor,
    useEditor,
} from 'entities/TextEditor';

interface ITextEditorProps extends IBaseEditorProps<'heading' | 'paragraph'> {}

const TextEditor = createTextEditor<ITextEditorProps>();

const Editor = function () {
    const editor = useEditor();

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

    const renderLeaf: ITextEditorProps['renderLeaf'] = useCallback((props) => {
        const { attributes, children, leaf } = props;
        const isBold = leaf.bold;

        const resultChildren = (
            <Fragment>
                <span
                    data-slate-placeholder={true}
                    contentEditable={false}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        opacity: '0.333',
                    }}
                >
                    {leaf.text ? '' : leaf.placeholder}
                </span>
                {children}
            </Fragment>
        );
        if (isBold) {
            return <strong {...attributes} children={resultChildren} />;
        }
        return <span {...attributes} children={resultChildren} />;
    }, []);

    return (
        <div
            style={{
                fontFamily: 'Times New Roman',
                lineHeight: '115%',
                fontSize: '14pt',
            }}
        >
            <TextEditor renderElements={renderElements} renderLeaf={renderLeaf} />
        </div>
    );
};

export default Editor;
