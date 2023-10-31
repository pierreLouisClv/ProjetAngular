import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./services/api-service/api.service";
import {HttpClientModule} from "@angular/common/http";
import { ApiTestComponent } from './Composants/api-test/api-test.component';
import { HeaderComponent } from './Composants/header/header.component';
import { FooterComponent } from './Composants/footer/footer.component';
import {JoueurCreateurService} from "./services/CreateurJoueur/joueur-createur.service";
import { DraftComponent } from './Composants/draft/draft.component';
import { ChoixJoueurComponent } from './Composants/choix-joueur/choix-joueur.component';
import { EquipeComponent } from './Composants/Model/equipe/equipe.component';
import { JoueurComponent } from './Composants/Model/joueur/joueur.component';
import {CreateurEquipeService} from "./services/CreateurEquipe/createur-equipe.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RandomJoueurService} from "./services/RandomJoueur/random-joueur.service";
import {DataService} from "./services/data-service/data.service";
import {EquipeBuilderService} from "./services/CreateurEquipe/equipe-builder.service";

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    HeaderComponent,
    FooterComponent,
    DraftComponent,
    ChoixJoueurComponent,
    EquipeComponent,
    JoueurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ApiService,JoueurCreateurService,CreateurEquipeService,RandomJoueurService,DataService,EquipeBuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
