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
import { TemplateList } from 'widgets/Templates';
import { useState } from 'react';

function FormDialog(props: { creatingHandler: (item: TypeItem) => void }, ref) {
    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState<TypeItem>(null);

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
                maxWidth={'md'}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        minWidth: '600px',
                        minHeight: '500px',
                    },
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const name = formJson.templateName;
                        api.documents
                            .create<{ template: TypeItem }>(name, selectedItem.id)
                            .then(({ template }) => {
                                api.documents.saveData(template.id, []);
                                props.creatingHandler(template);
                            });
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Создание нового документа</DialogTitle>
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
                    <DialogContentText color={'CaptionText'}>Выберите шаблон</DialogContentText>
                    <TemplateList
                        isShowAction={false}
                        onSelectHandler={(item) => {
                            setSelectedItem(item);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button type="submit" disabled={selectedItem === null}>
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default React.forwardRef(FormDialog);
