import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { ApiTestComponent } from './Composants/api-test/api-test.component';
import { HeaderComponent } from './Composants/header/header.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { ChampionshipComponent } from './Composants/Simulator/Renders/championship/championship.component';
import {ChampionshipSimulatorService} from "./services/Championship_Simulation/championship-simulator.service";
import {DayGenerator} from "./services/Championship_Simulation/DayGenerator";
import {FormsModule} from "@angular/forms";
import {ScoreGenerator} from "./services/Championship_Simulation/ScoreGenerator";
import { SimulationFormComponentComponent } from './Composants/Simulator/Forms/simulation-form-component/simulation-form-component.component';
import { RankingComponent } from './Composants/Simulator/Renders/ranking/ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    HeaderComponent,
    FooterComponent,
    ChampionshipComponent,
    SimulationFormComponentComponent,
    RankingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [ApiService, ChampionshipSimulatorService, DayGenerator, ScoreGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
