import { Input } from '@mui/material';

interface IItem<ValueType extends string | number = string> {
    id: string;
    title: string;
    value: ValueType;
}

interface ISelectorEditor<ValueType extends string | number = string> {
    value: ValueType;
    onChange: (value: ValueType) => void;
}

const NumberEditor = function (props: ISelectorEditor): JSX.Element {
    const { onChange, value } = props;

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
