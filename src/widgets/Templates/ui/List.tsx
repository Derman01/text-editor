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
import { useState, useLayoutEffect, useCallback, createRef } from 'react';
import { api } from 'shared/api';
import { TypeItem } from '../model/types';
import { ScrollContainer } from 'entities/scroll';
import { More, MoreProps } from 'entities/menu';
import CreatingForm from './CreatingForm';

const TemplateList = function ({
    onSelectHandler,
    showAll,
    isShowAction = true,
}: {
    showAll?: boolean;
    onSelectHandler?: (item: TypeItem) => void;
    isShowAction?: boolean;
}): JSX.Element {
    const [items, setItems] = useState<TypeItem[]>([]);
    const [selectedItem, setSelectedItem] = useState<TypeItem>(null);
    const popupRef = createRef();

    useLayoutEffect(() => {
        const promise = showAll ? api.templates.getAll : api.templates.getUsers;
        promise<TypeItem[]>().then((items) => {
            setItems(items.reverse());
        });
    }, []);

    const onAddClickHandler = () => popupRef.current.open();

    const actionHandler = useCallback((item: TypeItem, action: MoreProps['items'][0]) => {
        if (action.key === 'open') {
            window.open(`/template/${item.id}`);
        }
        if (action.key === 'delete') {
            api.templates.remove(item.id).then(() => {
                setItems((oldItems) => {
                    return oldItems.filter((itterItem) => itterItem.id !== item.id);
                });
            });
        }
    }, []);

    const onItemSelect = (item: TypeItem) => {
        if (onSelectHandler) {
            setSelectedItem(item);
            onSelectHandler(item);
        } else {
            window.open(`/template/${item.id}`);
        }
    };

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
                <Typography variant="h6">Шаблоны</Typography>
                {isShowAction && (
                    <IconButton onClick={onAddClickHandler}>
                        <AddIcon />
                    </IconButton>
                )}
            </Box>
            <Divider orientation="horizontal" />
            <ScrollContainer>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {items.map((item) => (
                        <Item
                            selected={selectedItem === item}
                            selectHandler={onItemSelect}
                            actionHandler={actionHandler}
                            isShowAction={isShowAction}
                            key={item.id}
                            item={item}
                        />
                    ))}
                </List>
            </ScrollContainer>
            <CreatingForm
                ref={popupRef}
                creatingHandler={(template) => {
                    setItems((items) => [
                        {
                            id: template.id,
                            name: template.name,
                        },
                        ...items,
                    ]);
                }}
            />
        </Box>
    );
};

const Item = function ({
    item,
    actionHandler,
    isShowAction,
    selectHandler,
    selected,
}: {
    selected: boolean;
    selectHandler: (item: TypeItem) => void;
    isShowAction: boolean;
    item: TypeItem;
    actionHandler: (item: TypeItem, action: MoreProps['items'][0]) => void;
}): JSX.Element {
    const handler = (action) => {
        return actionHandler(item, action);
    };

    return (
        <ListItemButton
            key={item.id}
            alignItems="flex-start"
            onClick={() => {
                selectHandler(item);
            }}
            selected={selected}
        >
            <ListItemText primary={item.name} />
            {isShowAction && <More actionHandler={handler} items={moreMenuItems} />}
        </ListItemButton>
    );
};

export default TemplateList;

const moreMenuItems: MoreProps['items'] = [
    {
        key: 'open',
        title: 'Открыть в новом окне',
        handler: () => {},
    },
    // {
    //     key: 'import',
    //     title: 'Выгрузить в docx',
    //     handler: () => {},
    // },
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
    {
        key: 'delete',
        title: 'Удалить',
        handler: () => {},
    },
];
