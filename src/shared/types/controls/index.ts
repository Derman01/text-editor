import { SxProps, Theme } from '@mui/material';

type FunctionControl<T extends object = object> = (props: T) => JSX.Element;
type Control = {
    children?: JSX.Element;
    className?: string;
    sx?: SxProps<Theme>;
};

export { FunctionControl };
