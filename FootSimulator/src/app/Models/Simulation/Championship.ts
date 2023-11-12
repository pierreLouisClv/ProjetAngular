import {Schedule} from "./Schedule/Schedule";
import {Ranking} from "./Ranking/Ranking";
import {Team} from "../Team";
import {Day} from "./Schedule/Day";
import {Match} from "./Schedule/Match";

export class Championship {

  // Calendrier
  private schedule:Schedule;

  // Ranking
  private ranking:Ranking;

  // Participants à la compétition
  private competitors:Set<Team>;

  constructor(_competitors:Set<Team>) {
    this.competitors = _competitors;
    this.schedule = new Schedule(_competitors.size);
    this.ranking = new Ranking(_competitors)
    // Récupération des équipes enregistrées
  }

  public setCompetitors(_teams:Set<Team>)
  {
    this.competitors = _teams;
  }

  public getCompetitors():Set<Team>
  {
    return this.competitors;
  }

  public getSchedule():Schedule
  {
    return this.schedule;
  }

  public setSchedule(_schedule:Schedule)
  {
    this.schedule = _schedule;
  }

  public getRanking():Ranking
  {
    return this.ranking;
  }

  public setRanking(_ranking:Ranking)
  {
    this.ranking = _ranking;
  }

  public getCompetitorsNumber():number
  {
    return this.competitors.size;
  }


  public setDaysOfSchedule(_days:Day[])
  {
    this.schedule.setResults(_days);
  }

  public foundMatchsByDay(_day:number):Set<Match>
  {
    return this.schedule?.getResults()[_day - 1].getResults();
  }

  public getDays(_startingDay:number, _range:number = 1)
  {
    let days = [];
    let count = 0;
    let lastDay = parseInt(_startingDay.toString()) + parseInt(_range.toString());
    for (let dayIndex = _startingDay; dayIndex < lastDay; dayIndex++)
    {
      days.push(this.schedule.getResults()[dayIndex - 1]);
      count++;
    }
    return days;
  }

  public resetRanking()
  {
    this.ranking.reset();
  }

  public updateRanking(_results:Day)
  {
    for (let match of _results.getResults())
    {
      this.saveStatsResults(match.getDomTeam(), match.getScore()[0], match.getScore()[1]);
      this.saveStatsResults(match.getExtTeam(), match.getScore()[1], match.getScore()[0]);
    }

    this.ranking.updateTeamsPositions();
  }

  public saveStatsResults(_team:Team, _goalsScored:number, _goalsConceded:number)
  {
    _team.stats.addMatchStats(_goalsScored, _goalsConceded);
  }

  public initRanking()
  {
    this.ranking.setTeamsRankedByPosition(this.getCompetitors());
    this.ranking.reset();
  }
}
