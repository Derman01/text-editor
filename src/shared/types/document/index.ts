import { ITemplateData } from 'shared/types/template';

interface IDocumentData {
    id: number;
    name: string;
    path: string;
    template: ITemplateData;
}

export type { IDocumentData };
