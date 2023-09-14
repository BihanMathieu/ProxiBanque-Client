import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent} from './pages/accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent} from './pages/connexion/connexion.component';
import { GenericComponentModule } from './shared/composant-generique/generic-component.module';
import { AuditComponent } from './pages/audit/audit.component';
import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { AjoutClientComponent } from './pages/ajout-client/ajout-client.component';
import { ButtonComponent } from './shared/composant-generique/button/button.component';
import { ModalComponent } from './shared/composant-generique/modal/modal.component';
import { ModificationClientComponent } from './modification-client/modification-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    DetailsClientComponent,
    AuditComponent,
    ButtonComponent,
    AjoutClientComponent,
    ModalComponent,
    ModificationClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GenericComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
