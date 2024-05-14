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

const getData = <T>(id: string): Promise<T> => {
    return $api.get(`documents/${id}/data`).then((data) => {
        return data.data;
    }) as Promise<T>;
};

const saveData = <T>(id: string | number, data: object): Promise<T> => {
    return $api.post(`documents/${id}/save`, data).then((data) => {
        return data.data;
    }) as Promise<T>;
};

const download = <T>(id: string | number, name: string): Promise<T> => {
    return $api
        .get(`documents/${id}/download`, {
            responseType: 'blob',
        })
        .then((blob) => {
            const objectURL = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.setAttribute('href', objectURL);
            a.setAttribute('download', `${name}_${new Date().toISOString()}.docx`);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(objectURL);
        }) as Promise<T>;
};

const makeDocx = <T>(id: string | number): Promise<T> => {
    return $api.post(`documents/${id}/makeDocument`).then((data) => {
        return data.data;
    }) as Promise<T>;
};

const documentsApi = {
    getAll,
    get,
    create,
    getData,
    saveData,
    download,
    makeDocx,
};

export { documentsApi };
