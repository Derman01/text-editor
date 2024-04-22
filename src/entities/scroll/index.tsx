import { Box, BoxProps, Theme } from '@mui/material';

const Container = function (props: BoxProps) {
    return (
        <Box
            {...props}
            sx={{
                overflowY: 'scroll',
            }}
        >
            {props.children}
        </Box>
    );
};

export { Container as ScrollContainer };
