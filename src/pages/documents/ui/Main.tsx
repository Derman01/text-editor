import { Box } from '@mui/material';
import { BoxShadow } from 'entities/box';
import { withNavigate } from 'entities/page';
import { withAuth } from 'shared/providers/auth';
import { DocumentsFolder, DocumentsList } from 'widgets/Documents';

const Main = function (): JSX.Element {
    return (
        <Box
            height={'100%'}
            display={'flex'}
            columnGap={'10px'}
            padding={'24px'}
            bgcolor={'#F4F6F8'}
        >
            <BoxShadow width={'250px'} bgcolor={'#fff'}>
                <DocumentsFolder />
            </BoxShadow>
            <BoxShadow width={'100%'} bgcolor={'#fff'}>
                <DocumentsList />
            </BoxShadow>
        </Box>
    );
};

export default withNavigate(withAuth(Main));
