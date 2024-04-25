import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { Editor } from './Editor';
import { ObjectMeta } from 'shared/types/meta';

interface IProps {
    open: boolean;
    meta?: ObjectMeta;
    value?: object;
    onChange: (newValue: object) => void;
    handleClose: () => void;
}

export const PopupSettings = function (props: IProps): JSX.Element {
    const [value, setValue] = useState(props.value);

    const onChange = useCallback((newValue: object) => {
        setValue(newValue);
    }, []);

    if (!props.open) {
        return null;
    }

    return (
        <Dialog
            PaperProps={{
                sx: {
                    margin: 0,
                    width: 500,
                    maxHeight: '100%',
                    height: '100%',
                    marginLeft: 'auto',
                },
            }}
            open={props.open}
            onClose={props.handleClose}
        >
            <DialogTitle>{props.meta.getTitle()}</DialogTitle>

            <DialogContent>
                <Editor meta={props.meta} value={value} onChange={onChange} />
            </DialogContent>
        </Dialog>
    );
};
