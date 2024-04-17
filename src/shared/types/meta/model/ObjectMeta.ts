import { IMeta } from './IntefaceMeta';
import { Meta, createMetaInfo } from './baseMeta';

export const OBJECT_TYPE_DEFAULT_VALUE = {};

export interface IObjectMeta<RuntimeInterface extends object> extends IMeta<RuntimeInterface> {
    readonly attributes?:
        | ObjectMetaAttributes<RuntimeInterface>
        | IObjectMetaAttributes<RuntimeInterface>;
}

export type IObjectMetaAttributes<RuntimeInterface extends object> = {
    [Key in keyof RuntimeInterface]-?: IMeta<RuntimeInterface[Key]> | null;
};

export type ObjectMetaAttributes<RuntimeInterface extends object> = {
    [Key in keyof RuntimeInterface]-?: Meta<RuntimeInterface[Key]> | null;
};

export class ObjectMeta<
    T = object,
    RuntimeInterface extends object = T extends object ? T : never
> extends Meta<RuntimeInterface> {
    protected _attributes: ObjectMetaAttributes<RuntimeInterface>;

    constructor(descriptor: IObjectMeta<RuntimeInterface>) {
        super(descriptor);
        this._attributes = this._createAttributes(descriptor.attributes);
    }

    /**
     * Преобразует тип в мета-описание.
     */
    toDescriptor(): IObjectMeta<RuntimeInterface> {
        return {
            ...super.toDescriptor(),
            attributes: this._attributes,
        };
    }

    getDefaultValue(): RuntimeInterface | undefined {
        if (this._defaultValue !== undefined) {
            return this._defaultValue;
        }
        const result = {} as RuntimeInterface;
        Object.keys(this._attributes).forEach((key) => {
            const value = this._attributes[key];
            const defaultValue = value?.getDefaultValue();
            if (defaultValue !== undefined) {
                result[key] = defaultValue;
            }
        });

        if (Object.keys(result).length === 0) {
            return OBJECT_TYPE_DEFAULT_VALUE as RuntimeInterface;
        }

        return result;
    }

    attributes<NewRuntimeInterface extends object>(
        attributes?: IObjectMeta<NewRuntimeInterface>['attributes']
    ): ObjectMeta<NewRuntimeInterface> | ObjectMetaAttributes<RuntimeInterface> {
        return this.clone({ attributes });
    }

    getAttributes(): ObjectMetaAttributes<RuntimeInterface> {
        return this._attributes;
    }

    protected _createAttributes(
        attributes?: ObjectMetaAttributes<RuntimeInterface>
    ): ObjectMetaAttributes<RuntimeInterface> {
        return attributes;
    }
}
