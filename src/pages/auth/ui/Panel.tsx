import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Tab } from '@mui/material';
import { useCallback, SyntheticEvent, useState } from 'react';
import { api } from 'shared/api';
import { TabContext, TabList } from '@mui/lab';
import { useAuth } from 'shared/providers/auth';
import Register from './Register';
import LoginPage from './Login';

const Panel = function (): JSX.Element {
    const [tab, setTab] = useState<'login' | 'register'>('login');

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
                <TabContext value={tab}>
                    <TabList>
                        <Tab
                            value={'login'}
                            label={'Авторизация'}
                            onClick={() => setTab('login')}
                        />
                        <Tab
                            value={'register'}
                            label={'Регистрация'}
                            onClick={() => setTab('register')}
                        />
                    </TabList>

                    <LoginPage />
                    <Register />
                </TabContext>
            </Box>
        </Container>
    );
};

export default Panel;
