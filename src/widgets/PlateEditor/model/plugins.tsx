import { withProps } from '@udecode/cn';
import { createPlugins, Plate, PlateElement, PlateLeaf } from '@udecode/plate-common';
import { createParagraphPlugin, ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import {
    createHeadingPlugin,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    KEYS_HEADING,
} from '@udecode/plate-heading';
import { createImagePlugin, ELEMENT_IMAGE } from '@udecode/plate-media';
import {
    createTablePlugin,
    ELEMENT_TABLE,
    ELEMENT_TR,
    ELEMENT_TD,
    ELEMENT_TH,
} from '@udecode/plate-table';
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_UL, createListPlugin } from '@udecode/plate-list';
import {
    createBoldPlugin,
    MARK_BOLD,
    createItalicPlugin,
    MARK_ITALIC,
    createUnderlinePlugin,
    MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';
import { createAlignPlugin } from '@udecode/plate-alignment';
import { createDeserializeDocxPlugin } from '@udecode/plate-serializer-docx';

import { ImageElement } from '@/components/plate-ui/image-element';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/table-cell-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { ListElement } from '@/components/plate-ui/list-element';
import { createTrailingBlockPlugin, withTrailingBlock } from '@udecode/plate-trailing-block';
import { createComboboxPlugin } from '@udecode/plate-combobox';
import { createExitBreakPlugin } from '@udecode/plate-break';

export const plugins = createPlugins(
    [
        createParagraphPlugin(),
        createHeadingPlugin(),
        createImagePlugin(),
        createTablePlugin(),
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createListPlugin(),
        createAlignPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        // ELEMENT_H1, ELEMENT_H2, ELEMENT_H3
                    ],
                },
            },
        }),
        createDeserializeDocxPlugin(),
        createExitBreakPlugin({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        hotkey: 'mod+shift+enter',
                        before: true,
                    },
                    {
                        hotkey: 'enter',
                        query: {
                            start: true,
                            end: true,
                            allow: KEYS_HEADING,
                        },
                        relative: true,
                        level: 1,
                    },
                ],
            },
        }),
    ],
    {
        components: withPlaceholders({
            [ELEMENT_IMAGE]: ImageElement,
            [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
            [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
            [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
            [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
            [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
            [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
            [ELEMENT_PARAGRAPH]: ParagraphElement,
            [ELEMENT_TABLE]: TableElement,
            [ELEMENT_TR]: TableRowElement,
            [ELEMENT_TD]: TableCellElement,
            [ELEMENT_TH]: TableCellHeaderElement,
            [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
            [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
            [ELEMENT_LI]: withProps(PlateElement, { as: 'li', className: 'widget-list-element' }),
            [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
            [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
            [MARK_UNDERLINE]: withProps(PlateLeaf, { as: 'u' }),
        }),
    }
);
