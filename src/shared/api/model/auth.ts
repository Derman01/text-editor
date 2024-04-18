import { $api, createQueryParams } from './const';

type LoginParams = {
    email: string;
    password: string;
};

const login = ({ email, password }: LoginParams) => {
    return $api.post(
        `/auth/login` +
            createQueryParams({
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
            createQueryParams({
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
