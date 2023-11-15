import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ChampionshipComponent} from './Composants/championship/championship.component';
import {ChampionshipSimulatorService} from "./services/simulation-services/championship-simulator.service";
import {DayGenerator} from "./services/simulation-services/dayGenerator";
import {FormsModule} from "@angular/forms";
import {ScoreGenerator} from "./services/simulation-services/scoreGenerator";
import {
  SimulationFormComponentComponent
} from './Composants/simulation-form-component/simulation-form-component.component';
import {RankingComponent} from './Composants/ranking/ranking.component';
import {HeaderComponent} from './Composants/header/header.component';
import {PlayerCreatorService} from "./services/player-creator-service/player-creator.service";
import {DraftComponent} from './Composants/draft/draft.component';
import {ChoixJoueurComponent} from './Composants/player-choice/choix-joueur.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RandomPlayerService} from "./services/random-player-service/random-player.service";
import {DataService} from "./services/data-service/data.service";
import {TeamBuilderService} from "./services/team-builder-service/team-builder.service";
import {RatingService} from "./services/rating-service/rating.service";
import {NgOptimizedImage} from "@angular/common";
import {ApiService} from "./services/api-service/api.service";
import { HomepageComponent } from './Composants/homepage/homepage.component';
import { PresentationBannerComponent } from './Composants/presentation-banner/presentation-banner.component';

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
  providers: [ApiService, ChampionshipSimulatorService, DayGenerator, ScoreGenerator, PlayerCreatorService,RandomPlayerService,DataService,TeamBuilderService,RatingService],

  bootstrap: [AppComponent]
})
export class AppModule { }
