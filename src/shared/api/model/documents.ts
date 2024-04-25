import { $api, createPostRequest } from './const';

const getAll = <T>(): Promise<T> => {
    return $api.get('/documents');
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
    }) as Promise<T>;
};

const get = <T>(id: string): Promise<T> => {
    return $api.get('documents/' + id);
};

const documentsApi = {
    getAll,
    get,
    create,
};

export { documentsApi };
