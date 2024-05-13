import { Checkbox, MenuItem, Select } from '@mui/material';
import { useCallback } from 'react';

interface IItem<ValueType extends string | number = string> {
    id: string;
    title: string;
    value: ValueType;
}

interface ISelectorEditor<ValueType = boolean> {
    value: ValueType;
    onChange: (value: ValueType) => void;
}

const BooleanEditor = function (props: ISelectorEditor): JSX.Element {
    const { onChange, value } = props;

    return (
        <div>
            <Checkbox
                checked={value}
                onChange={(event) => {
                    onChange(event.target.checked);
                }}
            />
        </div>
    );
};

export { BooleanEditor };
