import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ChampionshipComponent} from './Components/championship/championship.component';
import {ChampionshipSimulatorService} from "./Services/simulation-services/championship-simulator.service";
import {DayGenerator} from "./Services/simulation-services/dayGenerator";
import {FormsModule} from "@angular/forms";
import {ScoreGenerator} from "./Services/simulation-services/scoreGenerator";
import {
  SimulationFormComponentComponent
} from './Components/simulation-form-component/simulation-form-component.component';
import {RankingComponent} from './Components/ranking/ranking.component';
import {HeaderComponent} from './Components/header/header.component';
import {PlayerCreatorService} from "./Services/player-creator-service/player-creator.service";
import {DraftComponent} from './Components/draft/draft.component';
import {ChoixJoueurComponent} from './Components/player-choice/choix-joueur.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RandomPlayerService} from "./Services/random-player-service/random-player.service";
import {DataService} from "./Services/data-service/data.service";
import {TeamBuilderService} from "./Services/team-builder-service/team-builder.service";
import {RatingService} from "./Services/rating-service/rating.service";
import {NgOptimizedImage} from "@angular/common";
import {ApiService} from "./Services/api-service/api.service";
import {HomepageComponent} from './Components/homepage/homepage.component';
import {PresentationBannerComponent} from './Components/presentation-banner/presentation-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChampionshipComponent,
    SimulationFormComponentComponent,
    RankingComponent,
    DraftComponent,
    ChoixJoueurComponent,
    PresentationBannerComponent,
    ChoixJoueurComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOptimizedImage
  ],
  providers: [ApiService, ChampionshipSimulatorService, DayGenerator, ScoreGenerator, PlayerCreatorService, RandomPlayerService, DataService, TeamBuilderService, RatingService],

  bootstrap: [AppComponent]
})
export class AppModule {
}
