import { Component } from '@angular/core';
import { CompteCourant } from 'src/app/shared/model/compte-courant.model';
import { CompteService } from 'src/app/shared/services/compte.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent {

  comptes!: CompteCourant[];

  constructor(private comptesService:CompteService) {}

  ngOnInit() {
    this.loadComptes();
  }

  loadComptes() {
    this.comptesService.getCompte().subscribe((data) => {
      const comptesCourants = data.filter(compte => 
        compte.type == 'cc' && compte.solde <= -5000
        
      )
      this.comptes = comptesCourants;
    });
    
  }

  
  
/*
  navigateToCustomerDetails(customerId: number) {   
    this.router.navigate(['/customer', customerId]); 
  }
*/
}
