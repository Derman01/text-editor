import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { api } from 'shared/api';
import { TypeItem } from '../model/types';

function FormDialog(props: { creatingHandler: (item: TypeItem) => void }, ref) {
    const [open, setOpen] = React.useState(false);

    React.useImperativeHandle(
        ref,
        () => ({
            open: () => setOpen(true),
        }),
        [ref]
    );

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const name = formJson.templateName;
                        api.templates.create<{ template: TypeItem }>(name).then(({ template }) => {
                            props.creatingHandler(template);
                        });
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Создание нового шаблона</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="templateName"
                        name="templateName"
                        label="Название"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button type="submit">Создать</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default React.forwardRef(FormDialog);
