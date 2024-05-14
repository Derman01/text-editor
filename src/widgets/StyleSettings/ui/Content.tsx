import { Box, Button, Typography } from '@mui/material';
import { BoxShadow } from 'entities/box';
import { useTemplateContext } from '../model/context/Template';
import { useCallback, useState } from 'react';
import { PopupSettings } from './PopupSettings';
import * as metaWidgets from '../model/widgets';
import { ObjectMeta } from 'shared/types/meta';

type IConfigState =
    | {
          isOpen: true;
          meta: ObjectMeta;
          value: any;
          title: string;
      }
    | {
          isOpen: false;
      };

const HeadingWidgets = [
    metaWidgets.HeadingMeta1,
    metaWidgets.HeadingMeta2,
    metaWidgets.HeadingMeta3,
    metaWidgets.HeadingMeta4,
    metaWidgets.HeadingMeta5,
    metaWidgets.HeadingMeta6,
];

const Content = function (): JSX.Element {
    const { template, update } = useTemplateContext();
    const [config, setConfig] = useState<IConfigState>({
        isOpen: false,
    });

    const openHeadingSettings = (newSelectedMeta: ObjectMeta) => {
        setConfig({
            isOpen: true,
            meta: newSelectedMeta,
            title: newSelectedMeta.getTitle(),
            value: template[newSelectedMeta.getId()],
        });
    };

    const onChangeHandler = useCallback(
        (newValue: object) => {
            update(newValue);
        },
        [update]
    );

    return (
        <Box padding={1}>
            <BoxShadow padding={1}>
                <Button onClick={() => openHeadingSettings(metaWidgets.PageMeta)}>
                    <Typography>Настройки страниц</Typography>
                </Button>
            </BoxShadow>
            <BoxShadow padding={2} mt={2}>
                <Typography variant="h6">Настройки текстовых элементов ввода</Typography>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'}>
                    <Button onClick={() => openHeadingSettings(metaWidgets.ParagraphMeta)}>
                        <Typography>{metaWidgets.ParagraphMeta.getTitle()}</Typography>
                    </Button>
                    {/* <Button>
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
                    </Button> */}
                    <Box display={'flex'}>
                        {HeadingWidgets.map((widget) => {
                            return (
                                <Button
                                    key={widget.getId()}
                                    onClick={() => openHeadingSettings(widget)}
                                >
                                    <Typography>{widget.getTitle()}</Typography>
                                </Button>
                            );
                        })}
                    </Box>
                </Box>
                {config.isOpen && (
                    <PopupSettings
                        handleClose={() =>
                            setConfig({
                                isOpen: false,
                            })
                        }
                        key={config.meta.getId()}
                        meta={config.meta}
                        open={true}
                        value={template[config.meta.getId()]}
                        onChange={onChangeHandler}
                    />
                )}
            </BoxShadow>
        </Box>
    );
};

export default Content;
