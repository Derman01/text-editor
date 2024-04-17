import { MenuItem, Select } from '@mui/material';
import { useCallback } from 'react';

interface IItem<ValueType extends string | number = string> {
    id: string;
    title: string;
    value: ValueType;
}

interface ISelectorEditor<ValueType extends string | number = string> {
    value: ValueType;
    label: string;
    onChange: (value: ValueType) => void;
    items: IItem<ValueType>[];
}

const SelectorEditor = function (props: ISelectorEditor): JSX.Element {
    const { onChange, value, label, items } = props;
    const onChangeHandler = useCallback((_, value) => {
        onChange(value);
    }, []);
    return (
        <Select value={value} label={label} onChange={onChangeHandler}>
            {items.map((item) => (
                <MenuItem key={item.id} value={item.value}>
                    {item.title}
                </MenuItem>
            ))}
        </Select>
    );
};

export { SelectorEditor };
