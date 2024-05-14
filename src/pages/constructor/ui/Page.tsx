import Header from './Header';
import { TabProvider } from '../model/context/Tab';
import classes from './styles/Page.module.scss';
import Content from './Content';
import { useParams } from 'react-router-dom';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { api } from 'shared/api';
import { IDocumentData } from 'shared/types/document';
import { TemplateProvider } from 'widgets/StyleSettings';
import { Box } from '@mui/material';
import { withAuth } from 'shared/providers/auth';

const Page = function () {
    const { id } = useParams();
    const [documentInfo, setDocumentInfo] = useState<IDocumentData>(null);
    const [text, setText] = useState<object[]>(null);

    useEffect(() => {
        api.documents.get<IDocumentData>(id).then((document) => {
            setDocumentInfo(document);
        });
        api.documents.getData(id).then((data: object[]) => {
            setText(data);
        });
    }, [id]);

    if (!documentInfo || !text) {
        return <span>Загрузка...</span>;
    }

    return (
        <TemplateProvider template={documentInfo.template} text={text} documentID={documentInfo.id}>
            <TabProvider>
                <Box
                    height={'100%'}
                    position={'relative'}
                    overflow={'hidden'}
                    className={classes.page}
                >
                    <Header name={documentInfo.name} />
                    <Content />
                </Box>
            </TabProvider>
        </TemplateProvider>
    );
};

export default withAuth(Page);
