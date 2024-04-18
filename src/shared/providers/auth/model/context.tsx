import { createContext } from 'react';

export type UserInfo = {
    user: object;
    token: string;
};

export type AuthContextProps = {
    userInfo?: UserInfo;
    setUser?: (userInfo: UserInfo) => void;
    isGuest: boolean;
};

const initialProps: AuthContextProps = {
    isGuest: true,
};

export const AuthContext = createContext<AuthContextProps>(initialProps);
