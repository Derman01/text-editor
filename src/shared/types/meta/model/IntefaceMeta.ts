import { FunctionComponent } from 'react';

export type Condition = boolean;

export type IMetaInfo = {
    readonly title?: string;
    readonly icon?: string;
    readonly order?: number;
    readonly hidden?: Condition;
}

export type IMeta<RuntimeInterface> = {
    readonly id?: string;
    readonly info?: IMetaInfo;
    readonly editor?: IMetaEditor<RuntimeInterface>;
    readonly defaultValue?: RuntimeInterface;
};
export type IMetaEditorProperties<TypeValue> = {
    value?: TypeValue;
    onChange?: (value: TypeValue) => void;
};

export type IMetaEditor<TypeValue, Properies extends IMetaEditorProperties<TypeValue> = {}> = {
    component: FunctionComponent<Properies>;
    properties?: Properies;
};
