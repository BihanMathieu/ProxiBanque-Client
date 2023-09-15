import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Conseiller } from 'src/app/shared/model/conseiller.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private router: Router, private http: HttpClient) {}

  login = "";
  password = "";  

  onLogin() {
  
    const params = new HttpParams()
    .set('login', this.login)
    .set('password', this.password);
    this.http.get('http://localhost:8080/conseillers/auth', { params }).subscribe(response => {
      const conseiller = response as Conseiller;
      localStorage.setItem('conseiller', JSON.stringify(conseiller));
      
  });
    this.router.navigate(['/accueil']);
  }
}
