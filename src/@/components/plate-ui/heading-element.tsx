import React from 'react';
import { withRef, withVariants } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common';
import { cva } from 'class-variance-authority';

const headingVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-heading text-4xl font-bold',
      h2: 'font-heading text-2xl font-semibold tracking-tight',
      h3: 'font-heading text-xl font-semibold tracking-tight',
      h4: 'font-heading text-lg font-semibold tracking-tight',
      h5: 'text-lg font-semibold tracking-tight',
      h6: 'text-base font-semibold tracking-tight',
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
        <Element>{children}</Element>
      </HeadingElementVariants>
    );
  }
);
