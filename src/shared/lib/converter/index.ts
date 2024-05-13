const convertCamelCaseToPep = (data) => {
    if (!data) {
        return data;
    }
    if (data instanceof Array) {
        return data.map((item) => convertCamelCaseToPep(item));
    }
    if (typeof data === 'object') {
        return Object.entries(data).reduce((prev, [key, value]) => {
            const newNameKey = key.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
            return {
                ...prev,
                [newNameKey]: convertCamelCaseToPep(value),
            };
        }, {});
    }
    return data;
};



export { convertCamelCaseToPep };
