import { TabContext, TabList } from '@mui/lab';
import { Box, Button, IconButton, Tab } from '@mui/material';
import { useTabContext } from '../model/context/Tab';
import classes from './styles/Header.module.scss';
import { useTemplateContext } from 'widgets/StyleSettings';

const Header = function (): JSX.Element {
    const { config, selectedTabId, changeSelectedTabId } = useTabContext();
    const { save } = useTemplateContext();
    return (
        <Box
            className={classes.header}
            position={'sticky'}
            display={'grid'}
            flexDirection={'row'}
            gridTemplateColumns={'1fr auto 1fr'}
        >
            <TabContext value={selectedTabId}>
                <Box></Box>
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
    );
};

export default Header;
