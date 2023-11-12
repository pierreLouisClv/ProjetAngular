import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './Composants/header/header.component';
import {FooterComponent} from './Composants/footer/footer.component';
import {PlayerCreatorService} from "./services/player-creator-service/player-creator.service";
import {DraftComponent} from './Composants/draft/draft.component';
import {ChoixJoueurComponent} from './Composants/player-choice/choix-joueur.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RandomPlayerService} from "./services/random-player-service/random-player.service";
import {DataService} from "./services/data-service/data.service";
import {TeamBuilderService} from "./services/team-builder-service/team-builder.service";
import {RatingService} from "./services/rating-service/rating.service";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DraftComponent,
    ChoixJoueurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgOptimizedImage
  ],
  providers: [PlayerCreatorService,RandomPlayerService,DataService,TeamBuilderService,RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
