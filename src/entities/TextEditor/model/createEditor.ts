import { createEditor as defaultCreateEditor } from 'slate';
import { useSlate, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

/**
 * Метод создания модели редактора
 */
export const createEditor = () => withReact(withHistory(defaultCreateEditor()));

export const useEditor = useSlate;
