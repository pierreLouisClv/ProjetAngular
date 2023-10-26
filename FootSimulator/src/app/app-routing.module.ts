import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApiTestComponent} from "./Composants/api-test/api-test.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'api', component: ApiTestComponent}
  //{path:'', redirectTo:'homepage', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
