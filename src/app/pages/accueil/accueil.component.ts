import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/model/client.model';

import { Router } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { Conseiller } from 'src/app/shared/model/conseiller.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  clients!: Client[];

  conseiller!: Conseiller;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    const conseiller = localStorage.getItem('conseiller');
    if (conseiller) {
      this.conseiller = JSON.parse(conseiller);
    }
    this.loadCustomers(this.conseiller.id);
  }

  loadCustomers(conseillerId: number) {
    this.clientService.getCustomers(conseillerId).subscribe((data) => {
      this.clients = data;
    });
  }

  navigateToCustomerDetails(customerId: number) {
    this.router.navigate(['/customer', customerId]);
  }
}
