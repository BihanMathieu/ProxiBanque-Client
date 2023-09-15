import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getCustomerById(customerId: number): Observable<Client> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.get<Client>(url);
  }

  saveCustomer(client: Client, id: number): Observable<Client> {
    return this.http.post<Client>(this.apiUrl + '/conseiller/' + id, client);
  }

  deleteCustomer(customerId: number): Observable<void> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete<void>(url);
  }
}
