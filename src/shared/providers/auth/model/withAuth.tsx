import { FunctionControl } from 'shared/types/controls';
import { useAuth } from './useAuth';
import { Navigate } from 'react-router-dom';
import { PAGE_PATHS } from 'shared/config/page';

const withAuth = function (Control: FunctionControl) {
    return function (...args) {
        const { isGuest } = useAuth();
        if (isGuest) {
            return <Navigate to={PAGE_PATHS.auth} />;
        }
        return <Control {...args} />;
    };
};

export { withAuth };
