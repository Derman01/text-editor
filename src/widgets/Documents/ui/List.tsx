import {
    Box,
    Button,
    Container,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useLayoutEffect, useCallback, Fragment } from 'react';
import { api } from 'shared/api';
import { TypeItem } from '../model/types';
import { ScrollContainer } from 'entities/scroll';
import { More, MoreProps } from 'entities/menu';

const DocumentList = function (): JSX.Element {
    const [items, setItems] = useState<TypeItem[]>([]);

    useLayoutEffect(() => {
        api.documents.getAll().then(({ data }) => {
            setItems(data.data);
        });
    }, []);

    const onAddClickHandler = useCallback(() => {
        api.documents.create();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                padding={1}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Typography variant="h6">Документы</Typography>
                <IconButton onClick={onAddClickHandler}>
                    <AddIcon />
                </IconButton>
            </Box>
            <Divider orientation="horizontal" />
            <ScrollContainer>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {items.map((item) => (
                        <ListItemButton key={item.id} alignItems="flex-start">
                            <ListItemText primary={item.name} secondary={'01.04.2024'} />
                            <More items={moreMenuItems} />
                        </ListItemButton>
                    ))}
                </List>
            </ScrollContainer>
        </Box>
    );
};

export default DocumentList;

const moreMenuItems: MoreProps['items'] = [
    {
        key: 'open',
        title: 'Открыть в новом окне',
        handler: () => {},
    },
    {
        key: 'import',
        title: 'Выгрузить в docx',
        handler: () => {},
    },
    {
        key: 'link',
        title: 'Ссылка',
        handler: () => {},
    },
    {
        key: 'rights',
        title: 'Доступ',
        handler: () => {},
    },
    {
        key: 'rights',
        title: 'Дублировать',
        handler: () => {},
    },
    {
        key: 'rights',
        title: 'Выбрать несколько',
        handler: () => {},
    },
    {
        key: 'rights',
        title: 'Переместить',
        handler: () => {},
    },
    {
        key: 'rights',
        title: 'Удалить',
        handler: () => {},
    },
];
