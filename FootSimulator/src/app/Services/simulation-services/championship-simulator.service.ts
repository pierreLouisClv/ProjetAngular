import {Injectable} from '@angular/core';
import {Championship} from "../../Models/Simulation/championship"
import {DayGenerator} from "./dayGenerator";
import {Team} from "../../Models/team";
import {Match} from "../../Models/Simulation/Schedule/match";
import {ScoreGenerator} from "./scoreGenerator";
import {Day} from "../../Models/Simulation/Schedule/day";
import {Schedule} from "../../Models/Simulation/Schedule/schedule";

@Injectable({
  providedIn: 'root'
})
export class ChampionshipSimulatorService {

  private isStrengthPointsActivated!: boolean;

  private championship!: Championship;

  constructor(
    private dayGenerator: DayGenerator,
    private scoreGenerator: ScoreGenerator
  ) {
  }

  public initChampionship(_competitors: Set<Team>): void {
    this.championship = new Championship(_competitors);
    this.championship.setDaysOfSchedule(this.dayGenerator.generateDays(this.championship.getCompetitors()));
    this.championship.initRanking();
    this.isStrengthPointsActivated = true;
  }

  public getMatchsOfOneDay(_day: number): Set<any> {
    return this.championship.foundMatchsByDay(_day);
  }

  public getChampionship(): Championship {
    return this.championship;
  }

  public getSchedule(): Schedule {
    return this.championship.getSchedule();
  }

  public simulateScore(_match: Match): void {
    this.scoreGenerator.generateRandomWinner(_match, this.isStrengthPointsActivated);
    this.scoreGenerator.generateRandomScore(_match);
    _match.setIsScoreModified(false);
    _match.setIsMatchPlayed(true);
  }

  public simulateDays(_startingDay: number, _dayRange: number): void {
    let dayToSimulate: Day[] = this.championship.getDays(_startingDay, _dayRange);
    for (let day of dayToSimulate) {
      for (let match of day.getResults()) {
        this.simulateScore(match);
      }
    }
  }

  public updateRanking(): void {
    this.championship.resetRanking();
    for (let results of this.getSchedule().getResults()) {
      if (this.isDayComplete(results)) {
        this.championship.updateRanking(results);
      } else {
        break;
      }
    }
  }

  private isDayComplete(_results: Day): boolean {
    for (let match of _results.getResults()) {
      if (!match.getIsMatchPlayed() || match.getIsScoreModified()) {
        return false;
      }
    }
    return true;
  }

  public setIsStrengthPointsActivated(_isActivated: boolean): void {
    this.isStrengthPointsActivated = _isActivated;
  }
}
