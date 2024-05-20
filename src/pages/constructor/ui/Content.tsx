import { TabContext, TabPanel } from '@mui/lab';
import { useTabContext } from '../model/context/Tab';
import classes from './styles/Content.module.scss';
import { Box } from '@mui/material';

const Content = function (): JSX.Element {
    const { config, selectedTabId } = useTabContext();
    return (
        <TabContext value={selectedTabId}>
            {config.map(({ Control, key }) => {
                return (
                    <TabPanel sx={{ padding: 0 }} className={classes.content} key={key} value={key}>
                        <Box overflow={'scroll'} height={'100%'}>
                            {<Control />}
                        </Box>
                    </TabPanel>
                );
            })}
        </TabContext>
    );
};

export default Content;
