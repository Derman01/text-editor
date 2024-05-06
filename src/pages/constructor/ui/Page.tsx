import Header from './Header';
import { TabProvider } from '../model/context/Tab';
import classes from './styles/Page.module.scss';
import Content from './Content';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from 'shared/api';
import { IDocumentData } from 'shared/types/document';
import { TemplateProvider } from 'widgets/StyleSettings';
import { Box } from '@mui/material';
import { withAuth } from 'shared/providers/auth';

const Page = function () {
    const { id } = useParams();
    const [documentInfo, setDocumentInfo] = useState<IDocumentData>(null);

    useEffect(() => {
        api.documents.get<IDocumentData>(id).then((document) => {
            setDocumentInfo(document);
        });
    }, [id]);

    if (!documentInfo) {
        return <span>Загрузка...</span>;
    }

    return (
        <TemplateProvider template={documentInfo.template}>
            <TabProvider>
                <Box
                    height={'100%'}
                    position={'relative'}
                    overflow={'hidden'}
                    className={classes.page}
                >
                    <Header />
                    <Content />
                </Box>
            </TabProvider>
        </TemplateProvider>
    );
};

export default withAuth(Page);
