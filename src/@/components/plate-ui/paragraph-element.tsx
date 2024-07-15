import { withCn } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common';

const Element = (props) => {
    const { children, ...attrs } = props;
    return (
        <PlateElement {...attrs}>
            <span className="widget-p-children">{children}</span>
        </PlateElement>
    );
};

export const ParagraphElement = withCn(Element, 'm-0 px-0 widget-p ');
