import { FunctionComponent } from 'react';
import Page from './Page';

export const withNavigate = (FC: FunctionComponent) => {
    return (props) => (
        <Page>
            <FC {...props} />
        </Page>
    );
};
