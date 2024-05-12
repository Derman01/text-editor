import { Box } from '@mui/material';
import { BoxShadow } from 'entities/box';
import { withNavigate } from 'entities/page';
import { TemplateList } from 'widgets/Templates';

const TemplatePage = function (): JSX.Element {
    return (
        <Box
            height={'100%'}
            display={'flex'}
            columnGap={'10px'}
            padding={'24px'}
            bgcolor={'#F4F6F8'}
        >
            <BoxShadow width={'100%'} bgcolor={'#fff'}>
                <TemplateList />
            </BoxShadow>
        </Box>
    );
};

export default withNavigate(TemplatePage);
