import { createContext } from 'react';

export type User = {
    name: string;
    login: string;
};

export type AuthContextProps = {
    user?: User;
    setUser?: (User) => void;
    isGuest?: boolean;
};

const initialProps: AuthContextProps = {
    isGuest: true,
};

export const AuthContext = createContext<AuthContextProps>(initialProps);
