import { $api, createQueryParams } from './const';

type LoginParams = {
    email: string;
    password: string;
};

const login = ({ email, password }: LoginParams) => {
    return $api
        .post(
            `/auth/login` +
                createQueryParams({
                    email,
                    password,
                })
        )
        .catch((error) => {
            alert('Ошибка авторизации');
            return Promise.reject(error);
        });
};

type RegistrationParams = {
    name: string;
    email: string;
    password: string;
};

const registration = ({ email, name, password }: RegistrationParams) => {
    return $api
        .post(
            '/auth/register' +
                createQueryParams({
                    email,
                    name,
                    password,
                })
        )
        .then((data) => {
            return data;
        });
};

const logout = () => {
    return $api.get('/auth/logout').then(() => {
        localStorage.clear();
        return Promise.resolve();
    });
};

const authApi = {
    login,
    registration,
    logout,
};

export { authApi };
