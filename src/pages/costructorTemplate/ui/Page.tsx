import { useParams } from 'react-router-dom';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import { api } from 'shared/api';
import { IDocumentData } from 'shared/types/document';
import { TemplateProvider, Content as StyleSettings } from 'widgets/StyleSettings';
import { Box } from '@mui/material';
import { withAuth } from 'shared/providers/auth';
import { ITemplateData } from 'shared/types/template';
import Header from './Header';

const Page = function () {
    const { id } = useParams();
    const [templateInfo, setTemplateInfo] = useState<ITemplateData>(null);

    useEffect(() => {
        api.templates.getOne<{ template: ITemplateData }>(id).then(({ template }) => {
            setTemplateInfo(template);
        });
    }, [id]);

    if (!templateInfo) {
        return <span>Загрузка...</span>;
    }

    return (
        <TemplateProvider template={templateInfo}>
            <Box height={'100%'} position={'relative'} overflow={'hidden'}>
                <Header />
                <StyleSettings />
            </Box>
        </TemplateProvider>
    );
};

export default withAuth(Page);
