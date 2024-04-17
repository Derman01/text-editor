import Editor from './Editor';
import Page from './Page';
import { createEditorProvider } from 'entities/TextEditor';
import { demoTextValue } from '../model/const';
import { Panel } from './Panel';

const EditorProvider = createEditorProvider();

const Layout = () => {
    return (
        <EditorProvider initialValue={demoTextValue}>
            <Panel />
            <div className="flex justify-center">
                <Page>
                    <Editor />
                </Page>
            </div>
        </EditorProvider>
    );
};

export default Layout;
