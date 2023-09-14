import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private router: Router) {}

  username = "";
  password = "";  

  onLogin() {
  
    console.log('Identifiant:', this.username);
    console.log('Mot de passe:', this.password);

    this.router.navigate(['/accueil']);
  }
}
