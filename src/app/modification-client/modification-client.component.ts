import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../shared/model/client.model';
import { CompteCourant } from '../shared/model/compte-courant.model';
import { CompteEpargne } from '../shared/model/compte-epargne.model';

@Component({
  selector: 'app-modification-client',
  templateUrl: './modification-client.component.html',
  styleUrls: ['./modification-client.component.css'],
})
export class ModificationClientComponent implements OnInit {
  clientId: number;
  client: Client;

  nom: string = '';
  prenom = '';
  adresse = '';
  tel = '';
  codePostal = '';
  ville = '';
  compteCourant: CompteCourant | null;
  compteEpargne: CompteEpargne | null;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showClient();
  }

  showClient() {
    const customerIdParam = this.route.snapshot.paramMap.get('id');
    if (customerIdParam) {
      this.clientId = +customerIdParam;
    } else {
      console.error("L'ID du client est absent ou invalide.");
    }

    this.clientService.getCustomerById(this.clientId).subscribe((data) => {
      this.client = data;

      this.nom = this.client.nom;
      this.prenom = this.client.prenom;
      this.adresse = this.client.adresse;
      this.tel = this.client.tel;
      this.codePostal = this.client.codePostal;
      this.ville = this.client.ville;
      this.compteCourant = this.client.compteCourant;
    });
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

    this.clientService.updateCustomer(newClient, this.clientId).subscribe(
      (savedClient) => {
        console.log('Client enregistré avec succès : ', savedClient);
        this.router.navigate(['/accueil']);
      },
      (error) => {
        console.error("Erreur lors de l'enregistrement du client : ", error);
      }
    );
  }
}
