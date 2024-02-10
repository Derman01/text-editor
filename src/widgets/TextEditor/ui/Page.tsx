import { PropsWithChildren, FC, useMemo, CSSProperties } from 'react';
import './styles/index.scss';
import {
    ITextEditorProps as IBaseEditorProps,
    createTextEditor,
    useEditor,
} from 'entities/TextEditor';

interface ITextEditorProps extends IBaseEditorProps<'heading'> {}

const initialValue: ITextEditorProps['initialValue'] = [
    {
        type: 'heading',
        children: [
            {
                type: 'text',
                text: 'Заголовок',
            },
        ],
    },
];

type PageProps = PropsWithChildren & {
    width?: number;
    height?: number;
};

const Page = function (props: PageProps) {
    const { children, height, width } = props;
    const styles = useMemo(
        (): CSSProperties => ({
            width: `${width}mm`,
            height: `${height}mm`,
        }),
        []
    );
    return (
        <div className="widgets-TextEditor-Page__container" style={styles}>
            {children}
        </div>
    );
} as FC<PageProps>;

Page.defaultProps = {
    height: 297,
    width: 210,
};

export default Page;
