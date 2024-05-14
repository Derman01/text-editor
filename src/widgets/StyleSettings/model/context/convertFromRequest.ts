export const convertForRequestText = (text: object[]) => {
    return text.map((block) => {
        const headingGroup = block.type.match(/h([1-6])/);
        if (headingGroup) {
            const [name, depth] = headingGroup;
            return {
                ...block,
                type: 'heading',
                children: block.children.map((leaf) => {
                    return {
                        ...leaf,
                        depth,
                    };
                }),
            };
        }
        return block;
    });
};

export const convertFromRequestText = (text: object[]) => {
    return text.map((block) => {
        if (block.type === 'heading') {
            const depth = block.children[0].depth;
            return {
                ...block,
                type: 'h' + depth,
            };
        }
        return block;
    });
};
