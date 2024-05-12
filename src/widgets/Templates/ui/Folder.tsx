import {
    Box,
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useLayoutEffect, useCallback } from 'react';
import { TypeItem } from '../model/types';
import { ScrollContainer } from 'entities/scroll';
import { api } from 'shared/api';

const ITEMS: TypeItem[] = [
    {
        id: 1,
        name: 'Все',
    },
    {
        id: 2,
        name: 'Общий доступ',
    },
];

const DocumentsFolder = function (): JSX.Element {
    const [items, setItems] = useState<TypeItem[]>(ITEMS);

    useLayoutEffect(() => {
        api.templates.getUsers().then((data) => {
            console.log(data);
        });
    }, []);

    const onAddClickHandler = useCallback(() => {
        // api.documents.create();
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box padding={1} display={'flex'} justifyContent={'space-between'}>
                <Typography variant="h6">Папки</Typography>
                <IconButton onClick={onAddClickHandler}>
                    <AddIcon />
                </IconButton>
            </Box>
            <Divider orientation="horizontal" />
            <ScrollContainer>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {items.map((item) => (
                        <ListItemButton key={item.id} alignItems="flex-start">
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    ))}
                </List>
            </ScrollContainer>
        </Box>
    );
};

export default DocumentsFolder;
