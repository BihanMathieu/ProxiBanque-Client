import { CompteCourant } from './compte-courant.model';
import { CompteEpargne } from './compte-epargne.model';
import { Conseiller } from './conseiller.model';

export interface Client {
  id: number;
  nom: string;
  compteCourant: CompteCourant | null;
  compteEpargne: CompteEpargne | null;
  //conseiller: Conseiller;
  prenom: string;
  tel: string;
  adresse: string;
  codePostal: string;
  ville: string;
}
