import { memo } from 'react';
import {
    EditorEditable as BaseEditorEditable,
    EditorProvider as BaseEditorProvider,
} from './js/Editor';
import { IEditorProviderProps, ITextEditorProps } from '../types/Editor';

const EditorEditable = function <TProps extends ITextEditorProps>(
    props: TProps
) {
    return <BaseEditorEditable {...props} />;
};

const EditorProvider = function <TProps extends IEditorProviderProps>(
    props: TProps
) {
    return <BaseEditorProvider {...props} />;
};

/**
 * Метод получения модели редактора с типом
 */
const createTextEditor = function <TProps extends ITextEditorProps>() {
    return memo(EditorEditable<TProps>);
};

const createEditorProvider = function <TProps extends IEditorProviderProps>() {
    return memo(EditorProvider<TProps>);
};
export { createTextEditor, createEditorProvider };
