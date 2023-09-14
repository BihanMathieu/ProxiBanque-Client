import { Component } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../shared/model/client.model';

@Component({
  selector: 'app-modification-client',
  templateUrl: './modification-client.component.html',
  styleUrls: ['./modification-client.component.css']
})
export class ModificationClientComponent {

  clientId: number;
  client: Client; 


  nom:string = "";
  prenom = "";
  adresse = "";
  tel = "";
  codePostal = "";
  ville = "";

  constructor(private route: ActivatedRoute,private clientService:ClientService ,private router: Router) {}

  ngOnInit(): void {
    this.showClient()
   }
 
   showClient(){
     
      const customerIdParam = this.route.snapshot.paramMap.get('id');
      if (customerIdParam) {
        this.clientId = +customerIdParam; 
      } else {
        console.error("L'ID du client est absent ou invalide.");
      }
    
     
      this.clientService.getCustomerById(this.clientId).subscribe(data => {       
        this.client = data; 

        this.nom = this.client.nom;
        this.prenom = this.client.prenom;
        this.adresse = this.client.adresse;
        this.tel = this.client.tel;
        this.codePostal = this.client.codePostal;
        this.ville = this.client.ville;
      });

     
   }

}
