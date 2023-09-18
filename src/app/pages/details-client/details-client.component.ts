import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/model/client.model';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css'],
})
export class DetailsClientComponent implements OnInit {
  showDeleteConfirmation = false;
  clientId: number;
  client: Client;
  messageErreur: string;

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
    this.clientService
      .deleteCustomer(this.clientId)
      .pipe(
        catchError((error) => {
          this.messageErreur =
            'Vous ne pouvez pas supprimer un client dont les comptes ne sont pas à 0.';
          return throwError(error);
        })
      )
      .subscribe(
        () => {
          this.router.navigate(['/accueil']);
        }
        // (error) => {
        //   console.log('Hello');
        // }
      );
  }
}
