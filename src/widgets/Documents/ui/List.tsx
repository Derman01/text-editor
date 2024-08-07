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
import { useState, useLayoutEffect, useCallback, Fragment, createRef } from 'react';
import { api } from 'shared/api';
import { TypeItem } from '../model/types';
import { ScrollContainer } from 'entities/scroll';
import { More, MoreProps } from 'entities/menu';
import CreatingForm from './CreatingForm';

const DocumentList = function (): JSX.Element {
    const [items, setItems] = useState<TypeItem[]>([]);
    const popupRef = createRef();

    useLayoutEffect(() => {
        api.documents.getAll<TypeItem[]>().then((items) => {
            setItems(items.reverse());
        });
    }, []);

    const onAddClickHandler = () => popupRef.current.open();

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
                        <Item key={item.id} item={item} />
                    ))}
                </List>
            </ScrollContainer>
            <CreatingForm
                ref={popupRef}
                creatingHandler={(item: TypeItem) => {
                    setItems((items) => [
                        {
                            id: item.id,
                            name: item.name,
                            path: item.path,
                        },
                        ...items,
                    ]);
                }}
            />
        </Box>
    );
};

const Item = function ({ item }: { item: TypeItem }): JSX.Element {
    const actionHandler: MoreProps['actionHandler'] = useCallback(async (action) => {
        if (action.key === 'open') {
            window.open(`/constructor/${item.id}`);
        }
        if (action.key === 'import') {
            await api.documents.makeDocx(item.id);
            api.documents.download(item.id, item.name);
        }
    }, []);

    return (
        <ListItemButton
            onClick={() => {
                window.open(`/constructor/${item.id}`);
            }}
            alignItems="flex-start"
        >
            <ListItemText primary={item.name} />
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
    // {
    //     key: 'link',
    //     title: 'Ссылка',
    //     handler: () => {},
    // },
    // {
    //     key: 'rights',
    //     title: 'Доступ',
    //     handler: () => {},
    // },
    // {
    //     key: 'clone',
    //     title: 'Дублировать',
    //     handler: () => {},
    // },
    // {
    //     key: 'select',
    //     title: 'Выбрать несколько',
    //     handler: () => {},
    // },
    // {
    //     key: 'move',
    //     title: 'Переместить',
    //     handler: () => {},
    // },
    // {
    //     key: 'delete',
    //     title: 'Удалить',
    //     handler: () => {},
    // },
];
