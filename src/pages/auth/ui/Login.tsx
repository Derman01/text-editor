import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { useCallback, SyntheticEvent } from 'react';
import { api } from 'shared/api';
import { TabContext, TabPanel } from '@mui/lab';
import { useAuth } from 'shared/providers/auth';

const LoginPage = function (): JSX.Element {
    const { setUser } = useAuth();

    const handleSubmit = useCallback((event: SyntheticEvent) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        api.auth
            .login({
                email,
                password,
            })
            .then((user) => {
                setUser(user);
                window.location.replace('/');
            });
    }, []);

    return (
        <TabPanel value="login">
            <Typography component="h1" variant="h5">
                Авторизация
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Логин"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <Grid container alignItems={'flex-end'}>
                    <Grid item xs alignItems={'flex-end'}></Grid>
                    <Grid item>
                        <Button type="submit" variant="contained">
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </TabPanel>
    );
};

export default LoginPage;
