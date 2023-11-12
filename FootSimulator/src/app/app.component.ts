import { Component } from '@angular/core';
import {ChampionshipSimulatorService} from "./services/Championship_Simulation/championship-simulator.service";
import {Team} from "./Models/Team";
import {ApiService} from "./services/api-service/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FootSimulator';

  constructor(private simulator:ChampionshipSimulatorService,
              private apiCaller:ApiService) {
  }

  ngOnInit()
  {
    this.apiCaller.getTeams().subscribe((data: Team[] ) => {
      this.simulator.initChampionship(new Set<Team>(data));
    });
  }
}


