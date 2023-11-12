import {Injectable} from '@angular/core';
import {Championship} from "../../Models/Simulation/Championship"
import {DayGenerator} from "./DayGenerator";
import {Team} from "../../Models/Team";
import {Match} from "../../Models/Simulation/Schedule/Match";
import {ScoreGenerator} from "./ScoreGenerator";
import {Day} from "../../Models/Simulation/Schedule/Day";

@Injectable({
  providedIn: 'root'
})
export class ChampionshipSimulatorService {

  private championship!: Championship;

  constructor(
    private dayGenerator:DayGenerator,
    private scoreGenerator:ScoreGenerator
  ) {
  }

  public initChampionship(_competitors:Set<Team>){
    this.championship = new Championship(_competitors);
    this.championship.setDaysOfSchedule(this.dayGenerator.generateDays(this.championship.getCompetitors()));
    this.championship.initRanking();
  }

  public getMatchsOfOneDay(_day:number):Set<any>
  {
    return this.championship.foundMatchsByDay(_day);
  }

  public getChampionship():any
  {
    return this.championship;
  }

  public setChampionship(_championship:Championship)
  {
    this.championship = _championship;
  }

  public setCompetitors(data:any[])
  {
    let teams:Set<Team> = new Set<Team>();
    this.championship.setCompetitors(teams);
  }

  public getCompetitors() :Set<any>
  {
    return this.championship.getCompetitors();
  }

  public getSchedule()
  {
    return this.championship.getSchedule();
  }

  public simulateScore(match:Match)
  {
    this.scoreGenerator.generateRandomWinner(match);
    this.scoreGenerator.generateRandomScore(match);
    match.setIsScoreModified(false);
    match.setIsMatchPlayed(true);
  }

  public simulateDays(_startingDay:number, _dayRange:number)
  {
    let dayToSimulate:Day[] = this.championship.getDays(_startingDay, _dayRange);
    for (let day of dayToSimulate)
    {
      for(let match of day.getResults())
      {
        this.simulateScore(match);
      }
    }
  }

  public updateRanking()
  {
    this.championship.resetRanking();
    for (let results of this.getSchedule().getResults())
    {
      if (this.isDayComplete(results))
      {
        this.championship.updateRanking(results);
      }
      else
      {
        break;
      }
    }
  }

  private isDayComplete(_results:Day)
  {
    for (let match of _results.getResults())
    {
      if (!match.getIsMatchPlayed() || match.getIsScoreModified())
      {
        return false;
      }
    }
    return true;
  }
}
