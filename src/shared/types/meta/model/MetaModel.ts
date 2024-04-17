interface Attribite {

}

class AttribureModel {
    
}

interface Attributes {
    [name: string]: Attribite;
}

class MetaModel {
    private _id: string;
    private _title: string;
    private _attributes: Attributes;

    private constructor(id: string) {
        this._id = id;
    }

    private clone(): MetaModel {
        return 
    }

    protected id(id: string): MetaModel {
        return new MetaModel(id);
    }
}

export { MetaModel };
