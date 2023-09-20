import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/model/client.model';
import { CompteCourant } from 'src/app/shared/model/compte-courant.model';
import { CompteEpargne } from 'src/app/shared/model/compte-epargne.model';
import { Conseiller } from 'src/app/shared/model/conseiller.model';
import { ClientService } from 'src/app/shared/services/client.service';
import { CompteService } from 'src/app/shared/services/compte.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrls: ['./ajout-client.component.css'],
})
export class AjoutClientComponent implements OnInit {
  nom = '';
  prenom = '';
  adresse = '';
  tel = '';
  codePostal = '';
  ville = '';

  conseiller: Conseiller;
  compteCourant: CompteCourant;
  compteEpargne: CompteEpargne;

  constructor(
    private clientService: ClientService,
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router
  ) {} 

  ngOnInit(): void {
    const conseiller = localStorage.getItem('conseiller');
    if (conseiller) {
      this.conseiller = JSON.parse(conseiller);
    }
  }

  onSubmit() {
    const newClient: Client = {
      id: 0,
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      tel: this.tel,
      codePostal: this.codePostal,
      ville: this.ville,
      compteCourant: this.compteCourant,
      compteEpargne: this.compteEpargne,
    };

    this.clientService.saveCustomer(newClient, this.conseiller.id).subscribe(
      (savedClient) => {
        this.router.navigate(['/accueil']);
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du client : ", error);
      }
    );
  }

  // clientAdded() {
  //   this.clientService.deleteCustomer(this.clientId).subscribe(() => {
  //     this.router.navigate(['/accueil']);
  //   });
  // }
}
