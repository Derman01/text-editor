import { AuthContext, AuthContextProps } from './context';
import { useCallback, useMemo, useState } from 'react';

const LOCAL_STORAGE_USER = 'User';
const LOCAL_STORAGE_ACCESS_TOKEN = 'ACCESS_TOKEN';

const getUserInfoFromLocalStorage = () => {
    const userString = localStorage.getItem(LOCAL_STORAGE_USER);
    const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN);
    if (token) {
        return {
            user: JSON.parse(userString),
            token,
        };
    }
    return null;
};

const AuthProvider = function ({ children }: { children: JSX.Element }): JSX.Element {
    const [userInfo, setUserInfo] = useState(getUserInfoFromLocalStorage());
    const isGuest = useMemo(() => !userInfo?.token, [userInfo?.token]);

    const setttingUser = useCallback((userInfo: AuthContextProps['userInfo']) => {
        localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(userInfo?.user));
        localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, userInfo.token);
        setUserInfo(userInfo);
    }, []);

    const value: AuthContextProps = useMemo(() => {
        return {
            isGuest,
            userInfo,
            setUser: setttingUser,
        };
    }, []);

    return <AuthContext.Provider value={value} children={children} />;
};

export { AuthProvider };
