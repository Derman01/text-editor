import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Button, Grid, Link, Tab } from '@mui/material';
import { useCallback, useRef, SyntheticEvent, useState } from 'react';
import { api } from 'shared/api';
import { TabContext, TabList } from '@mui/lab';
import { redirect } from 'react-router-dom';
import { useAuth } from 'shared/providers/auth';

const LoginPage = function (): JSX.Element {
    const [tab, setTab] = useState('login');
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
            .then(({ data }) => {
                setUser(data);
                window.location.replace('/');
            });
    }, []);

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
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
                        <Grid item xs alignItems={'flex-end'}>
                            <Link
                                sx={{
                                    cursor: 'pointer',
                                }}
                                variant="body2"
                            >
                                {'Регистрация'}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained">
                                Войти
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
