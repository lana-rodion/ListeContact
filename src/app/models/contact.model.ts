import { Deserializable } from './deserializable.model';

export class Contact implements Deserializable {
    id: number;
    nom: string;
    prenom: string;
    numero: string;
    favoris: boolean;

    changeFavState() {
        this.favoris = !this.favoris;
    }

    deserialize(input: any): this {
        return Object.assign (this, input);
    }

}
