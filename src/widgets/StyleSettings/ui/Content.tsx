import { Box, Button, Typography } from '@mui/material';
import { BoxShadow } from 'entities/box';
import { useTemplateContext } from '../model/context/Template';
import { useCallback, useState } from 'react';
import { PopupSettings } from './PopupSettings';
import { HeadingMeta } from '../model/widgets';
import { ObjectMeta } from 'shared/types/meta';

const Content = function (): JSX.Element {
    const { template, update } = useTemplateContext();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedWidget, setSelectedWidget] = useState('null');
    const [meta, setMeta] = useState<ObjectMeta>();
    const [value, setValue] = useState();
    const [title, setTitle] = useState('');

    const openHeadingSettings = useCallback(() => {
        setIsOpen(true);
        setSelectedWidget('heading1');
        setMeta(HeadingMeta);
        setValue(template.heading1);
    }, []);

    const onChangeHandler = useCallback((newValue: object) => {}, []);

    return (
        <div>
            <BoxShadow padding={1}>
                <Button>
                    <Typography>Настройки страниц</Typography>
                </Button>
            </BoxShadow>
            <BoxShadow padding={2} mt={2}>
                <Typography variant="h6">Настройки текстовых элементов ввода</Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <Button>
                        <Typography>Параграф</Typography>
                    </Button>
                    <Button>
                        <Typography>Список</Typography>
                    </Button>
                    <Button>
                        <Typography>Нумерованный список</Typography>
                    </Button>
                    <Button>
                        <Typography>Изображение</Typography>
                    </Button>
                    <Button>
                        <Typography>Таблица</Typography>
                    </Button>
                    <Box display={'flex'}>
                        <Button onClick={openHeadingSettings}>
                            <Typography>Заголовок 1</Typography>
                        </Button>
                        <Button>
                            <Typography>Заголовок 2</Typography>
                        </Button>
                        <Button>
                            <Typography>Заголовок 3</Typography>
                        </Button>
                        <Button>
                            <Typography>Заголовок 4</Typography>
                        </Button>
                        <Button>
                            <Typography>Заголовок 5</Typography>
                        </Button>
                    </Box>
                </Box>
                <PopupSettings
                    handleClose={() => setIsOpen(false)}
                    key={selectedWidget}
                    meta={meta}
                    open={isOpen}
                    value={value}
                    onChange={onChangeHandler}
                />
            </BoxShadow>
        </div>
    );
};

export default Content;
