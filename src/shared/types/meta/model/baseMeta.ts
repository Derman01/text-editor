import { IMeta, IMetaEditor, IMetaInfo } from './IntefaceMeta';

type TWritable<T> = {
    -readonly [Key in keyof T]: T[Key];
};

export class Meta<RuntimeInterface = unknown> {
    protected _id: string;
    protected _type?: string;
    protected _editor: IMetaEditor<RuntimeInterface>;
    protected _defaultValue?: RuntimeInterface;
    protected _info: TWritable<IMetaInfo> = {};

    constructor(descriptor: IMeta<RuntimeInterface>) {
        this._id = descriptor.id ?? this._id ?? '';
        this._type = descriptor.type;
        this._defaultValue = descriptor.defaultValue;
        this._editor = descriptor.editor;
        this._info = createMetaInfo(descriptor.info);
    }

    clone<TNewMeta = this, TDescriptor extends IMeta<unknown> = IMeta<any>>(
        update: Partial<TDescriptor> = {}
    ): TNewMeta {
        const Constructor = this.constructor as any;
        let id = update.id ?? this._id;
        let type = update.type ?? this._type;
        return new Constructor({ ...this.toDescriptor(), ...update, id, type });
    }

    id(id: string | undefined): this {
        return this.clone({
            id,
        });
    }

    getId(): string {
        return this._id;
    }

    title(title: string | undefined): this {
        return this.clone({ info: { ...this._info, title } });
    }

    getTitle(): string | undefined {
        return this._info.title;
    }

    icon(icon: string | undefined): this {
        return this.clone({ info: { ...this._info, icon } });
    }

    getIcon(): string | undefined {
        return this._info.icon;
    }

    order(order: number | undefined): this {
        return this.clone({ info: { ...this._info, order } });
    }

    getOrder(): number | undefined {
        return this._info.order;
    }

    hidden(): this {
        return this.clone({ info: { ...this._info, hidden: true } });
    }

    isHidden(): boolean {
        return Boolean(this._info.hidden);
    }

    visible(): this {
        return this.clone({ info: { ...this._info, hidden: undefined } });
    }

    isVisible(): boolean {
        return !this.isHidden();
    }

    editor(editor: IMetaEditor<RuntimeInterface>): this {
        return this.clone({ editor });
    }

    getEditor(): IMetaEditor<RuntimeInterface> {
        return this._editor;
    }

    defaultValue(defaultValue: RuntimeInterface | undefined): this {
        return this.clone({ defaultValue });
    }

    getDefaultValue(): RuntimeInterface | undefined {
        return this._defaultValue;
    }

    toDescriptor(): IMeta<RuntimeInterface> {
        return {
            id: this._id || undefined,
            info: this._info,
            defaultValue: this._defaultValue,
            editor: this._editor,
        };
    }

    getType(): string {
        return this._type;
    }

    static id<RuntimeInterface>(id: string): Meta<RuntimeInterface> {
        return new Meta({
            id,
        });
    }
}

/**
 * Формирует объект `IMetaInfo`.
 * @param [info] - Визуально описание типа.
 * @private
 */
export function createMetaInfo(info?: IMetaInfo): IMetaInfo {
    return {
        order: info?.order,
        icon: info?.icon,
        title: info?.title,
        hidden: info?.hidden || undefined,
    };
}
