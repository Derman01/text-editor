import React from 'react';
import { cn } from '@udecode/cn';
import {
    createNodeHOC,
    createNodesHOC,
    PlaceholderProps,
    usePlaceholderState,
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

export const Placeholder = (props: PlaceholderProps) => {
    const { children, placeholder, nodeProps } = props;

    const { enabled } = usePlaceholderState(props);

    return React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            className: child.props.className,
            nodeProps: {
                ...nodeProps,
                className: cn(
                    enabled &&
                        'before:absolute before:left-0 before:right-0 before:cursor-text before:opacity-30 before:content-[attr(placeholder)]'
                ),
                placeholder,
            },
        });
    });
};

export const withPlaceholder = createNodeHOC(Placeholder);
export const withPlaceholdersPrimitive = createNodesHOC(Placeholder);

export const withPlaceholders = (components: any) =>
    withPlaceholdersPrimitive(components, [
        {
            key: ELEMENT_PARAGRAPH,
            placeholder: 'Параграф',
            hideOnBlur: true,
            query: {
                maxLevel: 1,
            },
        },
        {
            key: ELEMENT_H1,
            placeholder: 'Заголовок 1',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H2,
            placeholder: 'Заголовок 2',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H3,
            placeholder: 'Заголовок 3',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H4,
            placeholder: 'Заголовок 4',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H5,
            placeholder: 'Заголовок 5',
            hideOnBlur: false,
        },
        {
            key: ELEMENT_H6,
            placeholder: 'Заголовок 6',
            hideOnBlur: false,
        },
    ]);
