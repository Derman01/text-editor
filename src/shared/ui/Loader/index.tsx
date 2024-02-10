import { Children, Suspense } from 'react';

const FallbackLoader = () => {
    return <div>Loader</div>;
};

export default ({ children }) => {
    return <Suspense fallback={<FallbackLoader />}>{children}</Suspense>;
};
