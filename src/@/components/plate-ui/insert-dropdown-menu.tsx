'use client';

import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import { focusEditor, insertEmptyElement, useEditorRef } from '@udecode/plate-common';
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
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from './toolbar';
import { ELEMENT_TABLE, insertTable } from '@udecode/plate-table';

const items = [
    {
        label: 'Базовые элементы',
        items: [
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

            // {
            //   value: ELEMENT_BLOCKQUOTE,
            //   label: 'Quote',
            //   description: 'Quote (⌘+⇧+.)',
            //   icon: Icons.blockquote,
            // },
            // {
            //   value: ELEMENT_HR,
            //   label: 'Divider',
            //   description: 'Divider (---)',
            //   icon: Icons.hr,
            // },
        ],
    },
    {
        label: 'Заголовки',
        items: [
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
        ],
    },
    {
        label: 'Другие',
        items: [
            {
                value: ELEMENT_TABLE,
                label: 'Таблица',
                description: 'Таблица',
                icon: Icons.table,
            },
        ],
    },
    // {
    //   label: 'Media',
    //   items: [
    //     {
    //       value: ELEMENT_CODE_BLOCK,
    //       label: 'Code',
    //       description: 'Code (```)',
    //       icon: Icons.codeblock,
    //     },
    //     {
    //       value: ELEMENT_IMAGE,
    //       label: 'Image',
    //       description: 'Image',
    //       icon: Icons.image,
    //     },
    //     {
    //       value: ELEMENT_MEDIA_EMBED,
    //       label: 'Embed',
    //       description: 'Embed',
    //       icon: Icons.embed,
    //     },
    //     {
    //       value: ELEMENT_EXCALIDRAW,
    //       label: 'Excalidraw',
    //       description: 'Excalidraw',
    //       icon: Icons.excalidraw,
    //     },
    //   ],
    // },
    // {
    //   label: 'Inline',
    //   items: [
    //     {
    //       value: ELEMENT_LINK,
    //       label: 'Link',
    //       description: 'Link',
    //       icon: Icons.link,
    //     },
    //   ],
    // },
];

export function InsertDropdownMenu(props: DropdownMenuProps) {
    const editor = useEditorRef();
    const openState = useOpenState();

    return (
        <DropdownMenu modal={false} {...openState} {...props}>
            <DropdownMenuTrigger asChild>
                <ToolbarButton pressed={openState.open} tooltip="Insert" isDropdown>
                    <Icons.add />
                </ToolbarButton>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
            >
                {items.map(({ items: nestedItems, label }, index) => (
                    <React.Fragment key={label}>
                        {index !== 0 && <DropdownMenuSeparator />}

                        <DropdownMenuLabel>{label}</DropdownMenuLabel>
                        {nestedItems.map(({ value: type, label: itemLabel, icon: Icon }) => (
                            <DropdownMenuItem
                                key={type}
                                className="min-w-[180px]"
                                onSelect={async () => {
                                    switch (type) {
                                        // case ELEMENT_CODE_BLOCK: {
                                        //   insertEmptyCodeBlock(editor);
                                        //
                                        //   break;
                                        // }
                                        // case ELEMENT_IMAGE: {
                                        //   await insertMedia(editor, { type: ELEMENT_IMAGE });
                                        //
                                        //   break;
                                        // }
                                        // case ELEMENT_MEDIA_EMBED: {
                                        //   await insertMedia(editor, {
                                        //     type: ELEMENT_MEDIA_EMBED,
                                        //   });
                                        //
                                        //   break;
                                        // }
                                        case 'ul':
                                        case 'ol': {
                                            insertEmptyElement(editor, type, {
                                                select: true,
                                                nextBlock: true,
                                            });

                                            break;
                                        }
                                        case ELEMENT_TABLE: {
                                            insertTable(editor);

                                            break;
                                        }
                                        // case ELEMENT_LINK: {
                                        //   triggerFloatingLink(editor, { focused: true });

                                        //   break;
                                        // }
                                        default: {
                                            insertEmptyElement(editor, type, {
                                                select: true,
                                                nextBlock: true,
                                            });
                                        }
                                    }

                                    focusEditor(editor);
                                }}
                            >
                                <Icon className="mr-2 size-5" />
                                {itemLabel}
                            </DropdownMenuItem>
                        ))}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
