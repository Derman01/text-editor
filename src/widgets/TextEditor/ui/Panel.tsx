import { Editor, Path, Transforms } from 'slate';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEditor } from 'entities/TextEditor';
import { useCallback } from 'react';

const Panel = function () {
    const { isBold, toggleBold } = useBold();
    const { insertHeading } = useHeading();

    return (
        <div>
            <ButtonGroup>
                <Button
                    variant={isBold ? 'contained' : 'outlined'}
                    onClick={toggleBold}
                >
                    BOLD
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                Добавить:
                <Button onClick={insertHeading}>Заголовок</Button>
                <Button>Параграф</Button>
            </ButtonGroup>
        </div>
    );
};

const useBold = () => {
    const editor = useEditor();

    const isBold = (() => {
        const marks = Editor.marks(editor);
        return marks ? marks.bold === true : false;
    })();

    const toggleBold = () => {
        if (isBold) {
            Editor.removeMark(editor, 'bold');
        } else {
            Editor.addMark(editor, 'bold', true);
        }
    };

    return {
        isBold,
        toggleBold,
    };
};

const useHeading = () => {
    const editor = useEditor();

    const insertHeading = useCallback(() => {
        const point = editor.selection.anchor.path.at(0);

        if (point !== undefined) {
            // `next` should be the next top-most 'block' location.
            const next = Path.next([point]);

            if (next) {
                Transforms.insertNodes(
                    editor,
                    {
                        type: 'heading',
                        children: [{ text: '', placeholder: 'Заголовок' }],
                    },
                    { at: next }
                );

                // Put cursor in the newly created block.
                Transforms.select(editor, next);
                Transforms.collapse(editor);

                return;
            }
        }
    }, [editor]);

    return {
        insertHeading,
    };
};

export { Panel };
