import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
    collapseSelection,
    findNode,
    focusEditor,
    isBlock,
    isCollapsed,
    TElement,
    toggleNodeType,
    useEditorRef,
    useEditorSelector,
} from '@udecode/plate-common';
import {
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
} from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { Icons } from '@/components/icons';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
    useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from './toolbar';
import { ELEMENT_TABLE } from '@udecode/plate-table';

const items = [
    {
        value: ELEMENT_PARAGRAPH,
        label: 'Параграф',
        description: 'Параграф',
        icon: Icons.paragraph,
    },
    {
        value: 'ul',
        label: 'Список',
        description: 'Список',
        icon: Icons.ul,
    },
    {
        value: 'ol',
        label: 'Нумерованный список',
        description: 'Нумерованный список',
        icon: Icons.ol,
    },
    {
        value: ELEMENT_H1,
        label: 'Заголовок 1',
        description: 'Заголовок 1',
        icon: Icons.h1,
    },
    {
        value: ELEMENT_H2,
        label: 'Заголовок 2',
        description: 'Заголовок 2',
        icon: Icons.h2,
    },
    {
        value: ELEMENT_H3,
        label: 'Заголовок 3',
        description: 'Заголовок 3',
        icon: Icons.h3,
    },
    {
        value: ELEMENT_H4,
        label: 'Заголовок 4',
        description: 'Заголовок 4',
        icon: Icons.h4,
    },
    {
        value: ELEMENT_H5,
        label: 'Заголовок 5',
        description: 'Заголовок 5',
        icon: Icons.h5,
    },
    {
        value: ELEMENT_H6,
        label: 'Заголовок 6',
        description: 'Заголовок 6',
        icon: Icons.h6,
    },
    // {
    //     value: ELEMENT_BLOCKQUOTE,
    //     label: 'Quote',
    //     description: 'Quote (⌘+⇧+.)',
    //     icon: Icons.blockquote,
    // },
    {
        value: ELEMENT_TABLE,
        label: 'Таблица',
        description: 'Таблица',
        icon: Icons.table,
    },
    // {
    //   value: ELEMENT_HR,
    //   label: 'Divider',
    //   description: 'Divider (---)',
    //   icon: Icons.hr,
    // },
];

const defaultItem = items.find((item) => item.value === ELEMENT_PARAGRAPH)!;

export function TurnIntoDropdownMenu(props: DropdownMenuProps) {
    const value: string = useEditorSelector((editor) => {
        if (isCollapsed(editor.selection)) {
            const entry = findNode<TElement>(editor, {
                match: (n) => isBlock(editor, n),
            });

            if (entry) {
                return (
                    items.find((item) => item.value === entry[0].type)?.value ?? ELEMENT_PARAGRAPH
                );
            }
        }

        return ELEMENT_PARAGRAPH;
    }, []);

    const editor = useEditorRef();
    const openState = useOpenState();

    const selectedItem = items.find((item) => item.value === value) ?? defaultItem;
    const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem;

    return (
        <DropdownMenu modal={false} {...openState} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton
                    pressed={openState.open}
                    tooltip="Заменить"
                    isDropdown
                    className="lg:min-w-[130px]"
                >
                    <SelectedItemIcon className="size-5 lg:hidden" />
                    <span className="max-lg:hidden">{selectedItemLabel}</span>
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="min-w-0">
                <DropdownMenuLabel>Заменить</DropdownMenuLabel>

                <DropdownMenuRadioGroup
                    className="flex flex-col gap-0.5"
                    value={value}
                    onValueChange={(type) => {
                        // if (type === 'ul' || type === 'ol') {
                        //   if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
                        //     toggleIndentList(editor, {
                        //       listStyleType: type === 'ul' ? 'disc' : 'decimal',
                        //     });
                        //   } else if (settingsStore.get.checkedId('list')) {
                        //     toggleList(editor, { type });
                        //   }
                        // } else {
                        //   unwrapList(editor);
                        toggleNodeType(editor, { activeType: type });
                        // }

                        collapseSelection(editor);
                        focusEditor(editor);
                    }}
                >
                    {items.map(({ value: itemValue, label, icon: Icon }) => (
                        <DropdownMenuRadioItem
                            key={itemValue}
                            value={itemValue}
                            className="min-w-[180px]"
                        >
                            <Icon className="mr-2 size-5" />
                            {label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
