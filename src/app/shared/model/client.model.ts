import { CompteCourant } from "./compte-courant.model";
import { CompteEpargne } from "./compte-epargne.model";


export interface Client {
  id: number;
  nom: string;
  compteCourant: CompteCourant | null;
  compteEpargne: CompteEpargne | null;
  prenom: string;
  tel: string;
  adresse: string;
  codePostal: string;
  ville: string;
}
