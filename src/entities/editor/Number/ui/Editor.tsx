import { Input, InputLabel, MenuItem, Select } from '@mui/material';
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

const NumberEditor = function (props: ISelectorEditor): JSX.Element {
    const { onChange, value, label, items } = props;

    return (
        <Input
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
            fullWidth={true}
            type="number"
        />
    );
};

export { NumberEditor };
