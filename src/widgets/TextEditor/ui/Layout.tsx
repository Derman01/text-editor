import Editor from './Edtior';
import Page from './Page';

const Layout = () => {
    return (
        <div className="flex justify-center">
            <Page>
                <Editor />
            </Page>
        </div>
    );
};

export default Layout;
