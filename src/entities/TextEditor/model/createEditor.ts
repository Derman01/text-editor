import { useState } from 'react';
import { createEditor } from 'slate';
import { withReact } from 'slate-react';

/**
 * Метод создания модели редактора
 */
export const useEditor = () => withReact(createEditor());
