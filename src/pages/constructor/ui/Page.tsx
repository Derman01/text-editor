import Header from './Header';
import { TabProvider } from '../model/context/Tab';
import classes from './styles/Page.module.scss';
import Content from './Content';
import { withAuth } from 'shared/providers/auth';

const Page = function () {
    return (
        <TabProvider>
            <div className={classes.page}>
                <Header />
                <Content />
            </div>
        </TabProvider>
    );
};

export default withAuth(Page);
