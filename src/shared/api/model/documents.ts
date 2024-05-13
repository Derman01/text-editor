import { $api, createPostRequest } from './const';

const getAll = <T>(): Promise<T> => {
    return $api.get('/documents').then((data) => {
        return data.data;
    }) as Promise<T>;
};

const create = <T>(name: string, templateID: string | number): Promise<T> => {
    return createPostRequest('/documents/create', {
        name,
        template_id: templateID,
    }).then((data) => {
        return data.data;
    }) as Promise<T>;
};

const get = <T>(id: string): Promise<T> => {
    return $api.get('documents/' + id).then((data) => {
        return data.data;
    }) as Promise<T>;
};

const documentsApi = {
    getAll,
    get,
    create,
};

export { documentsApi };
