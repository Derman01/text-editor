import Loader from 'shared/ui/Loader';
import { lazy } from 'react';

const useLoading = (
    factory: () => Promise<{
        default: React.ComponentType<any>;
    }>
) => {
    return <Loader>{lazy(factory)}</Loader>;
};

export default useLoading;
