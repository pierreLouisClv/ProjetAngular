import {Component} from '@angular/core';
import {
  ChampionshipSimulatorService
} from "../../services/simulation-services/championship-simulator.service";
import {Team} from "../../Models/team";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {

  public ranking:Team[];

  constructor(private simulator:ChampionshipSimulatorService) {
    this.ranking = simulator.getChampionship().getRanking().getTeamsRankedByPosition();
  }

  public refreshRanking()
  {
    this.simulator.updateRanking();
    this.ranking = this.simulator.getChampionship().getRanking().getTeamsRankedByPosition();
  }




}
