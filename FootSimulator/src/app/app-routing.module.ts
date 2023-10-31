import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApiTestComponent} from "./Composants/api-test/api-test.component";
import {AppComponent} from "./app.component";
import {DraftComponent} from "./Composants/draft/draft.component";
import {ChoixJoueurComponent} from "./Composants/choix-joueur/choix-joueur.component";

const routes: Routes = [
  {path: 'api', component: ApiTestComponent},
  {path: 'draft', component: DraftComponent},
  {path: 'choix/:position/:precision/:nbJoueur', component: ChoixJoueurComponent},

  //{path:'', redirectTo:'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
