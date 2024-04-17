import { $api } from './const';

type LoginParams = {
    email: string;
    password: string;
};

const parsed = (data: object) => {
    return (
        '?' +
        Object.entries(data)
            .map(([name, value]) => {
                return `${name}=${value}`;
            })
            .join('&')
    );
};

const login = ({ email, password }: LoginParams) => {
    return $api.post(
        `/auth/login` +
            parsed({
                email,
                password,
            })
    );
};

type RegistrationParams = {
    name: string;
    email: string;
    password: string;
};

const registration = ({ email, name, password }: RegistrationParams) => {
    return $api.post(
        '/auth/register' +
            parsed({
                email,
                name,
                password,
            })
    );
};

const authApi = {
    login,
    registration,
};

export { authApi };
