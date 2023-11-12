import { Component } from '@angular/core';
import {ChampionshipSimulatorService} from "../../../../services/Championship_Simulation/championship-simulator.service";
import {Team} from "../../../../Models/Team";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  ranking:Team[];

  constructor(private simulator:ChampionshipSimulatorService) {
    this.ranking = simulator.getChampionship().getRanking().getTeamsRankedByPosition();
  }

  public refreshRanking()
  {
    this.simulator.updateRanking();
    this.ranking = this.simulator.getChampionship().getRanking().getTeamsRankedByPosition();
  }




}
