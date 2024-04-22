import { $api, createPostRequest } from './const';

const getAll = () => {
    return $api.get('/documents');
};

const create = () => {
    return createPostRequest('/documents/create', {
        name: 'Документ',
        template_id: 1,
    });
};

const documentsApi = {
    getAll,
    create,
};

export { documentsApi };
