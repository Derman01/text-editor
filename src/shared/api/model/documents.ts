import { $api, createPostRequest } from './const';

const getAll = <T>(): Promise<T> => {
    return $api.get('/documents').then((data) => {
        return data.data;
    }) as Promise<T>;
};

const create = <T>(): Promise<T> => {
    const dateString = new Date().toLocaleString('ru', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return createPostRequest('/documents/create', {
        name: `Документ от ${dateString}`,
        template_id: 1,
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
