import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompteCourant } from '../model/compte-courant.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private apiUrl = 'http://localhost:8080/comptes';

  constructor(private http: HttpClient) {}

  getCompte(): Observable<CompteCourant[]> {
    return this.http.get<CompteCourant[]>(this.apiUrl);
  }

  saveCompte(client: CompteCourant, idClient: number): Observable<CompteCourant> {
    const url = `${this.apiUrl}/${idClient}`;
    return this.http.post<CompteCourant>(url, client);
  }
}
