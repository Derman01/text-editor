import { TabContext, TabList } from '@mui/lab';
import { Box, Button, Divider, IconButton, Tab, Typography } from '@mui/material';
import { useTabContext } from '../model/context/Tab';
import classes from './styles/Header.module.scss';
import { useTemplateContext } from 'widgets/StyleSettings';

const Header = function ({ name }: { name: string }): JSX.Element {
    const { config, selectedTabId, changeSelectedTabId } = useTabContext();
    const { saveTemplate, saveDocument, info } = useTemplateContext();

    const save = () => {
        saveTemplate();
        saveDocument();
    };
    return (
        <Box>
            <Box
                className={classes.header}
                position={'sticky'}
                display={'grid'}
                flexDirection={'row'}
                paddingLeft={2}
                paddingRight={2}
                alignItems={'center'}
                gridTemplateColumns={'1fr auto 1fr'}
            >
                <TabContext value={selectedTabId}>
                    <Typography marginLeft={1} variant="h5">
                        Конструктор документа: {name}
                    </Typography>
                    <TabList className={classes.switcher} onChange={changeSelectedTabId}>
                        {config.map((config) => {
                            return <Tab key={config.key} label={config.label} value={config.key} />;
                        })}
                    </TabList>
                    <Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                        <Button onClick={save}>Сохранить</Button>
                    </Box>
                </TabContext>
            </Box>
            <Divider />
        </Box>
    );
};

export default Header;
