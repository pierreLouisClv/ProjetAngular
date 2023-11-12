import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ChampionshipComponent} from './Composants/Simulator/Renders/championship/championship.component';
import {ChampionshipSimulatorService} from "./services/Championship_Simulation/championship-simulator.service";
import {DayGenerator} from "./services/Championship_Simulation/DayGenerator";
import {FormsModule} from "@angular/forms";
import {ScoreGenerator} from "./services/Championship_Simulation/ScoreGenerator";
import {
  SimulationFormComponentComponent
} from './Composants/Simulator/Forms/simulation-form-component/simulation-form-component.component';
import {RankingComponent} from './Composants/Simulator/Renders/ranking/ranking.component';
import {HeaderComponent} from './Composants/header/header.component';
import {FooterComponent} from './Composants/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChampionshipComponent,
    SimulationFormComponentComponent,
    RankingComponent,
    DraftComponent,
    ChoixJoueurComponent
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
