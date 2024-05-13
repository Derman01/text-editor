import { ITemplateData } from 'shared/types/template';
import { $api } from './const';
import { DEFAULT_SETTINGS_TEMPLATE, convertFormatRequest } from 'widgets/StyleSettings';

const update = (id: string, data: ITemplateData) => {
    return $api.put(`/templates/${id}`, {
        ...data,
        id: undefined,
        is_public: undefined,
    });
};

const getAll = <T>() => {
    return ($api.get('/templates') as Promise<{ templates: T }>).then((data) => {
        return data.templates;
    }) as Promise<T>;
};

const getUsers = <T>() => {
    return ($api.get('/templates/own') as Promise<{ templates: T }>).then((data) => {
        return data.templates;
    }) as Promise<T>;
};

const create = <T>(name: string) => {
    return $api.post('/templates', {
        ...convertFormatRequest(DEFAULT_SETTINGS_TEMPLATE),
        name,
    }) as Promise<T>;
};

const remove = (id: string | number) => {
    return $api.delete('/templates/' + id);
};

const getOne = <T>(id: string | number) => {
    return $api.get(`/templates/${id}`) as Promise<T>;
};

export const templatesApi = {
    getUsers,
    getAll,
    create,
    remove,
    getOne,
    update,
};
