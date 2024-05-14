import { Box, Button, Divider, Input, TextField, Typography } from '@mui/material';
import { useTemplateContext } from 'widgets/StyleSettings';

const Header = function (): JSX.Element {
    const { saveTemplate: save, info, update, updateInfo } = useTemplateContext();
    return (
        <Box>
            <Box
                position={'sticky'}
                display={'grid'}
                flexDirection={'row'}
                minHeight={'50px'}
                alignItems={'center'}
                gridTemplateColumns={'1fr auto 1fr'}
            >
                <Box>
                    <TextField
                        variant="outlined"
                        sx={{
                            minWidth: '300px',
                            maxWidth: '500px',
                            fontSize: '20px',
                        }}
                        size={'medium'}
                        value={info.name}
                        onChange={(e) => {
                            updateInfo({
                                name: e.target.value,
                            });
                        }}
                    />
                </Box>
                <Box display={'flex'} alignItems={'center'} height={'100%'}>
                    <Typography variant={'h5'} property={'primary'}>
                        Настройка шаблона
                    </Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    <Button onClick={save}>Сохранить</Button>
                </Box>
            </Box>
            <Divider />
        </Box>
    );
};

export default Header;
