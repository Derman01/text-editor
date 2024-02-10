import {
    Editor,
    Range,
    Point,
    Transforms,
    Descendant,
    createEditor,
    Element as SlateElement,
    BaseEditor,
    Path,
} from 'slate';

// const withTables = (editor: BaseEditor) => {
//     const { deleteBackward, deleteForward, insertBreak } = editor;

//     editor.deleteBackward = (unit) => {
//         const { selection } = editor;

//         if (selection && Range.isCollapsed(selection)) {
//             const [cell] = Editor.nodes(editor, {
//                 match: (n) =>
//                     !Editor.isEditor(n) &&
//                     SlateElement.isElement(n) &&
//                     n.type === 'table-cell',
//             });

//             if (cell) {
//                 const [, cellPath] = cell;
//                 const start = Editor.start(editor, cellPath);

//                 if (Point.equals(selection.anchor, start)) {
//                     return;
//                 }
//             }
//         }

//         deleteBackward(unit);
//     };

//     editor.deleteForward = (unit) => {
//         const { selection } = editor;

//         if (selection && Range.isCollapsed(selection)) {
//             const [cell] = Editor.nodes(editor, {
//                 match: (n) =>
//                     !Editor.isEditor(n) &&
//                     SlateElement.isElement(n) &&
//                     n.type === 'table-cell',
//             });

//             if (cell) {
//                 const [, cellPath] = cell;
//                 const end = Editor.end(editor, cellPath);

//                 if (Point.equals(selection.anchor, end)) {
//                     return;
//                 }
//             }
//         }

//         deleteForward(unit);
//     };

//     editor.insertBreak = () => {
//         const { selection } = editor;
//         if (selection && Range.isCollapsed(selection)) {
//             const [cell] = Editor.nodes(editor, {
//                 match: (n) =>
//                     !Editor.isEditor(n) &&
//                     SlateElement.isElement(n) &&
//                     n.type === 'table-cell',
//             });

//             if (cell) {
//                 return;
//             }
//         }
//         return insertBreak();
//     };

//     return editor;
// };

// const onAddHeading = useCallback(() => {
//     const point = editor.selection.anchor.path.at(0);

//     if (point !== undefined) {
//         // `next` should be the next top-most 'block' location.
//         const next = Path.next([point]);

//         if (next) {
//             Transforms.insertNodes(
//                 editor,
//                 {
//                     type: 'heading',
//                     children: [{ text: 'хуй' }],
//                 },
//                 { at: next }
//             );

//             // Put cursor in the newly created block.
//             Transforms.select(editor, next);
//             Transforms.collapse(editor);

//             return;
//         }
//     }
// }, [editor]);

// const onAddTable = useCallback(() => {
//     editor.insertNode({
//         type: 'table',
//         props: {
//             columns: 2,
//             rows: 2,
//         },
//         children: [
//             {
//                 type: 'table-row',
//                 children: [
//                     {
//                         type: 'table-cell',
//                         children: [{ text: '11' }],
//                     },
//                     {
//                         type: 'table-cell',
//                         children: [{ text: '12' }],
//                     },
//                 ],
//             },
//             {
//                 type: 'table-row',
//                 children: [
//                     {
//                         type: 'table-cell',
//                         children: [{ text: '21' }],
//                     },
//                     {
//                         type: 'table-cell',
//                         children: [{ text: '22' }],
//                     },
//                 ],
//             },
//         ],
//     });
// }, [editor]);

// const Table = (props) => {
//     return (
//         <table
//             {...props.attributes}
//             style={{
//                 border: '1px solid red',
//             }}
//         >
//             {props.children}
//         </table>
//     );
// };

// const TableRow = (props) => {
//     return (
//         <tr
//             {...props.attributes}
//             style={{
//                 display: 'flex',
//                 width: '100%',
//             }}
//         >
//             {props.children}
//         </tr>
//     );
// };

// const TableCell = (props) => {
//     return (
//         <td
//             {...props.attributes}
//             style={{
//                 border: '1px solid black',
//                 width: '100%',
//             }}
//         >
//             {props.children}
//         </td>
//     );
// };
