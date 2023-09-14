import { Component } from '@angular/core';
import { Client } from 'src/app/shared/model/client.model';
import { CompteCourant } from 'src/app/shared/model/compte-courant.model';
import { CompteEpargne } from 'src/app/shared/model/compte-epargne.model';
import { ClientService } from 'src/app/shared/services/client.service';
import { CompteService } from 'src/app/shared/services/compte.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css']
})
export class AjoutClientComponent {

  nom = "";
  prenom = "";
  adresse = "";
  tel = "";
  codePostal = "";
  ville = ""

  compteCourant: CompteCourant;
  compteEpargne: CompteEpargne;

  constructor(private clientService: ClientService, private compteService: CompteService) {} // Injectez le service ClientService

  onSubmit() {
    const newClient: Client = {
      id: 0,
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      tel: this.tel,
      codePostal: this.codePostal,
      ville: this.ville,
      compteCourant:this.compteCourant,
      compteEpargne:this.compteEpargne
    }

    this.clientService.saveCustomer(newClient).subscribe(
      (savedClient) => {
        console.log("Client enregistré avec succès : ", savedClient);
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du client : ", error);
  }
    );
  }

}
