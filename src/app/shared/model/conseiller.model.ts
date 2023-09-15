import { Agence } from "./agence.model";

export interface Conseiller {
    id: number;
    nom: string;
    prenom: string;
    gradeGerant: boolean;
    agence: Agence;
}
