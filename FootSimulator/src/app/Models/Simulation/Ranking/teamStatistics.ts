import {Match} from "../Schedule/match";
import {EnumResult} from "../Schedule/enumResult";

export class TeamStatistics {
  private daysPlayed:number;

  private points:number;

  private goalsScored:number;

  private goalsConceded:number;

  private wins:number;

  private draws:number;

  private looses:number;

  constructor() {
    this.daysPlayed = 0;
    this.points = 0;
    this.goalsScored = 0;
    this.goalsConceded = 0;
    this.wins = 0;
    this.draws = 0;
    this.looses = 0;
  }

  public getDaysPlayed():number
  {
    return this.daysPlayed;
  }
  public getPoints():number
  {
    return this.points;
  }
  public getGoalsScored():number
  {
    return this.goalsScored;
  }
  public getGoalsConceded():number
  {
    return this.goalsConceded;
  }
  public getWins():number
  {
    return this.wins;
  }

  public getDraws():number
  {
    return this.draws;
  }

  public getLooses():number
  {
    return this.looses;
  }

  public getGoalsDifference():number
  {
    return this.goalsScored - this.goalsConceded;
  }

  public addMatchStats(_goalsScored:number, _goalsConceded:number):void
  {
    this.daysPlayed ++;
    this.goalsScored += _goalsScored;
    this.goalsConceded += _goalsConceded;

    if (_goalsScored > _goalsConceded)
    {
      this.wins ++;
      this.points += 3;
    }
    else if (_goalsConceded == _goalsScored)
    {
      this.draws ++;
      this.points ++;
    }
    else
    {
      this.looses ++;
    }
  }

}
