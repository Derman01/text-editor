import {
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { PAGE_CONFIGS } from 'app/config/routePage';
import { Link, NavLink, redirect, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { api } from 'shared/api';
import { PAGE_PATHS, PageConfig } from 'shared/config/page';
import { useAuth } from 'shared/providers/auth';

interface RoutesProps {
    children: JSX.Element;
}

const pages = [PAGE_CONFIGS.documents, PAGE_CONFIGS.templates];

const Page = function (props: RoutesProps) {
    const { children } = props;
    const { pathname } = useLocation();

    return (
        <Box display={'flex'} flexDirection={'column'} height={'100%'}>
            <Box minHeight={'60px'} display={'flex'} alignItems={'center'} marginLeft={2}>
                <Typography variant="h5">Сервис документов</Typography>
            </Box>
            <Divider />
            <Box display={'flex'} flex={'1 1 100%'}>
                <Box
                    width={'200px'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    alignItems={'flex-start'}
                >
                    <List>
                        {pages.map((page) => (
                            <NavLink key={page.path} to={page.path}>
                                <ListItemButton selected={pathname === page.path}>
                                    <ListItemIcon>
                                        <page.Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={page.title} />
                                </ListItemButton>
                            </NavLink>
                        ))}
                    </List>
                    <Button
                        onClick={() => {
                            api.auth.logout().then(() => {
                                location.replace(PAGE_PATHS.auth);
                            });
                        }}
                    >
                        Выйти
                    </Button>
                </Box>
                <Box width={'100%'}>{children}</Box>
            </Box>
        </Box>
    );
};

export default Page;
