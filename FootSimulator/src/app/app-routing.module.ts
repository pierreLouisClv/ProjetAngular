import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ChampionshipComponent} from "./Composants/Simulator/Renders/championship/championship.component";
import {DraftComponent} from "./Composants/draft/draft.component";
import {ChoixJoueurComponent} from "./Composants/player-choice/choix-joueur.component";

const routes: Routes = [
  {path: 'simulator', component:ChampionshipComponent},
  {path: 'draft', component: DraftComponent},
  {path: 'choix/:position/:precision/:nbJoueur', component: ChoixJoueurComponent}


  //{path:'', redirectTo:'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
