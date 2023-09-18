import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { DetailsClientComponent } from './pages/details-client/details-client.component';
import { AuditComponent } from './pages/audit/audit.component';
import { AjoutClientComponent } from './pages/ajout-client/ajout-client.component';
import { ModificationClientComponent } from './pages/modification-client/modification-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'client/:id', component: DetailsClientComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'ajoutClient', component: AjoutClientComponent },
  { path: 'modificationClient/:id', component: ModificationClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
