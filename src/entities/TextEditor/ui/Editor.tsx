import { Ref, forwardRef, memo } from 'react';
import BaseTextEditor from './js/Editor';
import { ITextEditorProps, TTextEditorRef } from '../types/Editor';

const TextEditor = function <TProps extends ITextEditorProps>(props: TProps) {
    return <BaseTextEditor {...props} />;
};

/**
 * Метод получения модели редактора с типом
 */
export const createTextEditor = function <TProps extends ITextEditorProps>() {
    return memo(TextEditor<TProps>);
};
