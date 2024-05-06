import React from 'react';
import { withRef, withVariants } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common';
import { cva } from 'class-variance-authority';
import { useTemplateContext } from 'widgets/StyleSettings';

const headingVariants = cva('', {
    variants: {
        variant: {
            h1: 'font-bold',
            h2: 'tracking-tight',
            h3: 'tracking-tight',
            h4: 'tracking-tight',
            h5: 'tight',
            h6: 'tracking-tight',
        },
        isFirstBlock: {
            true: 'mt-0',
            false: '',
        },
    },
});

const HeadingElementVariants = withVariants(PlateElement, headingVariants, [
    'isFirstBlock',
    'variant',
]);

export const HeadingElement = withRef<typeof HeadingElementVariants>(
    ({ variant = 'h1', isFirstBlock, children, ...props }, ref) => {
        const { template } = useTemplateContext();
        const { element, editor } = props;

        const Element = variant!;

        return (
            <HeadingElementVariants
                ref={ref}
                asChild
                variant={variant}
                isFirstBlock={element === editor.children[0]}
                {...props}
            >
                <Element
                    style={{
                        textAlign: `${template.heading1.alignment}`,
                        fontSize: `${template.heading1.size}pt`,
                        fontFamily: `${template.heading1.font}`,
                    }}
                >
                    {children}
                </Element>
            </HeadingElementVariants>
        );
    }
);
