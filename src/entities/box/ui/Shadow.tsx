import { Box, BoxProps } from '@mui/material';

const BoxShadow = function (props: BoxProps) {
    return (
        <Box
            {...props}
            height={'100%'}
            overflow={'hidden'}
            sx={{
                borderRadius: '6px',
                boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.25)',
                ...props.sx,
            }}
        />
    );
};

export { BoxShadow };
