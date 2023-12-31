import {Component, OnInit} from '@angular/core';
import {ChampionshipSimulatorService} from "../../Services/simulation-services/championship-simulator.service";
import {Match} from "../../Models/Simulation/Schedule/match";

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.scss']
})
export class ChampionshipComponent implements OnInit {
  public currentDay: number;

  public showedMatchs: Match[];

  public isPresentation: boolean;

  constructor(private simulator: ChampionshipSimulatorService) {
    this.currentDay = 1;
    this.showedMatchs = [];
    this.isPresentation = false;
  }

  ngOnInit() {
    this.showTeams();
  }

  public activeModePresentation(): void {
    this.isPresentation = !this.isPresentation;
  }

  public showTeams(_dayCounter: number = 0) {
    this.showMatchsOfTheCurrentDay(_dayCounter);
  }

  public showMatchsOfTheCurrentDay(_dayCounter: number): void {
    this.currentDay += _dayCounter;
    if (this.currentDay > 0) {
      this.showedMatchs = Array.from(this.simulator.getMatchsOfOneDay(this.currentDay));
    }
  }

  public closeScore(match: Match): void {
    if (match.getScore()[0] == null || match.getScore()[1] == null) {
      console.log("Le match entre " + match.getDomTeam().name + " et " + match.getExtTeam().name + " n'a pas pu être modifié.");
    } else {
      match.setIsMatchPlayed(true);
      match.setIsScoreModified(false);
    }
  }

  public modifyScore(match: Match): void {
    match.setIsScoreModified(true);
  }

  public simulate(match: Match): void {
    console.log(match);
    this.simulator.simulateScore(match);
  }

  public resetSchedule(): void {
    this.simulator.initChampionship(this.simulator.getChampionship().getCompetitors());
  }
}
