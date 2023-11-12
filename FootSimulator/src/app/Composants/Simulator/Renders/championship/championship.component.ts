import {Component, OnInit} from '@angular/core';
import {
  ChampionshipSimulatorService
} from "../../../../services/Championship_Simulation/championship-simulator.service";
import {Match} from "../../../../Models/Simulation/Schedule/Match";

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit{
  currentDay:number;

  showedMatchs:Match[];

  isLaunched:boolean;

  constructor(private simulator:ChampionshipSimulatorService) {
    this.currentDay = 1;
    this.showedMatchs = [];
    this.isLaunched = false;
  }
  ngOnInit(){
    console.log("heho")
    this.showTeams();
  }

  public showTeams(_dayCounter:number = 0)
  {
    this.isLaunched = true;
    this.showMatchsOfTheCurrentDay(_dayCounter);
  }

  public showMatchsOfTheCurrentDay(_dayCounter:number):void
  {
    this.currentDay += _dayCounter;
    if(this.currentDay > 0)
    {
      this.showedMatchs = Array.from(this.simulator.getMatchsOfOneDay(this.currentDay));
    }
  }

  public closeScore(match:Match):void
  {
    if(match.getScore()[0] == null || match.getScore()[1] == null)
    {
      console.log("Le match entre " + match.getDomTeam().name + " et " + match.getExtTeam().name + " n'a pas été modifié.");
    }
    else
    {
      match.setIsMatchPlayed(true);
      match.setIsScoreModified(false);
      console.log(match.getIsScoreModified());
    }
  }

  public modifyScore(match:Match):void
  {
    match.setIsScoreModified(true);
  }

  public simulate(match:Match)
  {
    console.log(match);
    this.simulator.simulateScore(match);
  }

}
