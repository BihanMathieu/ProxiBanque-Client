import { Component } from '@angular/core';
import { Conseiller } from '../../model/conseiller.model';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  conseiller: Conseiller

  ngOnInit(){
    const conseiller = sessionStorage.getItem('conseiller')
    if(conseiller){
      this.conseiller = JSON.parse(conseiller)
    }
  }

}
