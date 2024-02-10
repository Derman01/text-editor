import { useState } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';
import { withHistory } from 'slate-history';

/**
 * Метод создания модели редактора
 */
export const useEditor = () => withReact(withHistory(createEditor()));
