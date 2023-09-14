import { Component } from '@angular/core';
import { Client } from '../../shared/model/client.model';

import { Router } from '@angular/router';
import { ClientService} from '../../shared/services/client.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  clients!: Client[];

  constructor(private clientService:ClientService ,private router: Router) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.clientService.getCustomers().subscribe((data) => {
      this.clients = data;
    });
    
  }

  navigateToCustomerDetails(customerId: number) {   
    this.router.navigate(['/customer', customerId]); 
  }
}
