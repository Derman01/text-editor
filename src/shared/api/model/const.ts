import axios from 'axios';

const baseURL = 'http://server.evgfilim1.me:8090/api/';

const $api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

$api.interceptors.request.use((request) => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    request.headers.Authorization = `Bearer ${accessToken}`;
    return request;
});

$api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.replace('/auth');
        }
        console.log(error);
        throw error;
    }
);

const createQueryParams = (data: object) => {
    return (
        '?' +
        Object.entries(data)
            .map(([name, value]) => {
                return `${name}=${value}`;
            })
            .join('&')
    );
};

const createPostRequest = (path: string, data: object) => {
    return $api.post(path + createQueryParams(data));
};

export { $api, createQueryParams, createPostRequest };
