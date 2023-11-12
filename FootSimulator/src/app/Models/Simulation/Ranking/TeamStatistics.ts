import {Match} from "../Schedule/Match";
import {EnumResult} from "../Schedule/EnumResult";

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

  public getDaysPlayed()
  {
    return this.daysPlayed;
  }
  public getPoints()
  {
    return this.points;
  }
  public getGoalsScored()
  {
    return this.goalsScored;
  }
  public getGoalsConceded()
  {
    return this.goalsConceded;
  }
  public getWins()
  {
    return this.wins;
  }

  public getDraws()
  {
    return this.draws;
  }

  public getLooses()
  {
    return this.looses;
  }

  public getGoalsDifference()
  {
    return this.goalsScored - this.goalsConceded;
  }

  public addMatchStats(_goalsScored:number, _goalsConceded:number)
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

  public reset()
  {
    this.daysPlayed = 0;
    this.points = 0;
    this.goalsScored = 0;
    this.goalsConceded = 0;
    this.wins = 0;
    this.draws = 0;
    this.looses = 0;
  }

}
