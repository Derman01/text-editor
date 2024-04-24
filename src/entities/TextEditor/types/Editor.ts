/**
 * Узлы
 */

import { BaseEditor } from 'slate';
import { HistoryEditor } from 'slate-history';
import { ReactEditor } from 'slate-react';

export type TTypeLeaf<TypesLeaf extends string = string> =
    | TypesLeaf
    | 'paragraph';

interface ILeafDefault<
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> {
    type?: TTypeLeaf<TypesLeaf>;
    props?: TProps;
}

interface ILeafText<
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> extends ILeafDefault<TypesLeaf, TProps> {
    text: string;
}

interface ILeafChildren<
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> extends ILeafDefault<TypesLeaf, TProps> {
    text: string;
}

export type TLeaf<
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> = ILeafText<TypesLeaf, TProps> | ILeafChildren<TypesLeaf, TProps>;

export type TLeafs<
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> = TLeaf<TypesLeaf, TProps>[];

/**
 * Блоки
 */
export type TTypeBlock<TypesBlock extends string = string> =
    | TypesBlock
    | 'paragraph';

export interface IBlock<
    TypesBlock extends TTypeBlock = TTypeBlock,
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> {
    type: TTypeBlock<TypesBlock>;
    children: TLeafs<TypesLeaf, TProps>;
}

/**
 * Текст
 */
export type TTextData<
    TypesBlock extends TTypeBlock = TTypeBlock,
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> = IBlock<TypesBlock, TypesLeaf, TProps>[];

/**
 * Рендер
 */
interface IRenderBlockProps {
    attributes: object;
    leaf?: {
        text?: string;
        placeholder?: string;
        bold: boolean;
    };
    children: JSX.Element;
}

export type TRenderBlock<TypeBlock extends TTypeBlock = TTypeBlock> = {
    [typeBlock in TypeBlock]: (props: IRenderBlockProps) => JSX.Element;
};

/**
 * Пропсы
 */
export interface ITextEditorProps<
    TypesBlock extends TTypeBlock = TTypeBlock,
> {
    editor: BaseEditor & ReactEditor;
    renderElements?: TRenderBlock<TypesBlock>;
    onKeyDown?: (event: Event) => void;
    renderLeaf?: (props: IRenderBlockProps) => JSX.Element;
    insertBreak?: () => void;
}

export interface IEditorProviderProps<
    TypesBlock extends TTypeBlock = TTypeBlock,
    TypesLeaf extends TTypeLeaf = TTypeLeaf,
    TProps extends object = {}
> {
    initialValue?: TTextData<TypesBlock, TypesLeaf, TProps>;
    children: JSX.Element[];
}

export type TEditor = BaseEditor & HistoryEditor & ReactEditor;
