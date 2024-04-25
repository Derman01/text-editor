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
        api.documents.getAll<TypeItem[]>().then((items) => {
            setItems(items.reverse());
        });
    }, []);

    const onAddClickHandler = useCallback(() => {
        api.documents.create().then((item: TypeItem) => {
            setItems((items) => [
                {
                    id: item.id,
                    name: item.name,
                    path: item.path,
                },
                ...items,
            ]);
        });
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
                        <Item item={item} />
                    ))}
                </List>
            </ScrollContainer>
        </Box>
    );
};

const Item = function ({ item }: { item: TypeItem }): JSX.Element {
    const actionHandler: MoreProps['actionHandler'] = useCallback((action) => {
        if (action.key === 'open') {
            window.open(`/constructor/${item.id}`);
        }
    }, []);

    return (
        <ListItemButton key={item.id} alignItems="flex-start">
            <ListItemText primary={item.name} secondary={'01.04.2024'} />
            <More actionHandler={actionHandler} items={moreMenuItems} />
        </ListItemButton>
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
        key: 'clone',
        title: 'Дублировать',
        handler: () => {},
    },
    {
        key: 'select',
        title: 'Выбрать несколько',
        handler: () => {},
    },
    {
        key: 'move',
        title: 'Переместить',
        handler: () => {},
    },
    {
        key: 'delete',
        title: 'Удалить',
        handler: () => {},
    },
];
