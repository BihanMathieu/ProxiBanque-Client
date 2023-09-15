import { Component, OnInit } from '@angular/core';
import { Conseiller } from '../../model/conseiller.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  conseiller: Conseiller

  constructor(private router: Router) {}

  ngOnInit(){
    const conseiller = localStorage.getItem('conseiller')
    if(conseiller){
      this.conseiller = JSON.parse(conseiller)
    }
  }

  deconnexion(){
    localStorage.removeItem('conseiller');
    this.router.navigate(['/connexion']);
  }
}
