import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ChampionshipComponent} from "./Components/championship/championship.component";
import {DraftComponent} from "./Components/draft/draft.component";
import {ChoixJoueurComponent} from "./Components/player-choice/choix-joueur.component";
import {HomepageComponent} from "./Components/homepage/homepage.component";

const routes: Routes = [
  {path: 'simulator', component:ChampionshipComponent},
  {path: 'draft', component: DraftComponent},
  {path: 'choix/:position/:precision/:nbJoueur', component: ChoixJoueurComponent},
  { path: '', component: HomepageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
