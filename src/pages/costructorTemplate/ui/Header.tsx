import { Box, Button, Divider, Input, TextField, Typography } from '@mui/material';
import { useTemplateContext } from 'widgets/StyleSettings';

const Header = function (): JSX.Element {
    const { saveTemplate: save, info, update, updateInfo } = useTemplateContext();
    return (
        <Box>
            <Box display={'flex'} width={'100%'} flexDirection={'column'}>
                <Box
                    sx={{
                        background: '#999',
                    }}
                >
                    <Typography marginLeft={1} color={'white'} variant="h5" padding={1}>
                        Конструктор шаблона: {info.name}
                    </Typography>
                </Box>
                <Box
                    position={'sticky'}
                    display={'grid'}
                    flexDirection={'row'}
                    minHeight={'50px'}
                    alignItems={'center'}
                    gridTemplateColumns={'1fr auto 1fr'}
                >
                    <Box></Box>
                    <Box display={'flex'} alignItems={'center'} height={'100%'}>
                        <Typography variant={'h5'} property={'primary'}>
                            Настройка шаблона
                        </Typography>
                    </Box>
                    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                        <Button onClick={save}>Сохранить</Button>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
};

export default Header;
