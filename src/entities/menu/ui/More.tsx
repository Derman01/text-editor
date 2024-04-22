import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCallback, useState } from 'react';

interface Item {
    key: string;
    title: string;
    handler: () => void;
}

export interface Props {
    items: Item[];
}

const More = function (props: Props): JSX.Element {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const onMoreOptionsClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onItemClick = useCallback((item: Item) => {
        handleClose();
        item.handler();
    }, []);

    return (
        <div>
            <IconButton onClick={onMoreOptionsClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                {props.items.map((item) => (
                    <MenuItem key={item.key} onClick={() => onItemClick(item)}>
                        {item.title}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export { More };
