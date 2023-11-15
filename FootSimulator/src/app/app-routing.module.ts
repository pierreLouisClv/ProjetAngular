import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChampionshipComponent} from "./Components/championship/championship.component";
import {DraftComponent} from "./Components/draft/draft.component";
import {PlayerChoiceComponent} from "./Components/player-choice/player-choice.component";
import {HomepageComponent} from "./Components/homepage/homepage.component";

const routes: Routes = [
  {path: 'simulator', component: ChampionshipComponent},
  {path: 'draft', component: DraftComponent},
  {path: 'choix/:position/:precision/:nbJoueur', component: PlayerChoiceComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', component: HomepageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
