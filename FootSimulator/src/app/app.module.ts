import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import { ApiTestComponent } from './Composants/api-test/api-test.component';
import { HeaderComponent } from './Composants/header/header.component';
import { FooterComponent } from './Composants/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiTestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
