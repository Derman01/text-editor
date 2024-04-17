import { FunctionControl } from 'shared/types/controls';
import { AuthContext, AuthContextProps } from './context';
import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

const LOCAL_STORAGE_FIELD = 'UserInfo';

const getUserFromLocalStorage = () => {
    const userString = localStorage.getItem(LOCAL_STORAGE_FIELD);
    if (userString) {
        return JSON.parse(userString) as AuthContextProps['user'];
    }
    return null;
};

const AuthProvider = function ({ children }: { children: JSX.Element }): JSX.Element {
    const [user, setUser] = useState(getUserFromLocalStorage());
    const isGuest = useMemo(() => !user, [user]);

    const setttingUser = useCallback((user: AuthContextProps['user']) => {
        localStorage.setItem(LOCAL_STORAGE_FIELD, JSON.stringify(user));
        setUser(user);
    }, []);

    const value: AuthContextProps = useMemo(() => {
        return {
            isGuest,
            user,
            setUser: setttingUser,
        };
    }, []);

    return <AuthContext.Provider value={value} children={children} />;
};

export { AuthProvider };
