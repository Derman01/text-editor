import axios from 'axios';

const baseURL = 'http://server.evgfilim1.me:8090/api/';

const $api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export { $api };
