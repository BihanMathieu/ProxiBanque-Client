import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/model/client.model';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css'],
})
export class DetailsClientComponent implements OnInit {
  showDeleteConfirmation = false;
  clientId: number;
  client: Client;

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
    });
  }

  openDeleteConfirmationModal() {
    this.showDeleteConfirmation = true;
    console.log(this.showDeleteConfirmation);
  }

  closeDeleteConfirmationModal() {
    this.showDeleteConfirmation = false;
  }

  confirmDelete() {
    this.clientService.deleteCustomer(this.clientId).subscribe(() => {
      this.router.navigate(['/accueil']);
    });
  }
}
