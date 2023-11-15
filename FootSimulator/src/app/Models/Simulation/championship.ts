import {Schedule} from "./Schedule/schedule";
import {Ranking} from "./Ranking/ranking";
import {Team} from "../team";
import {Day} from "./Schedule/day";
import {Match} from "./Schedule/match";

export class Championship {

  // Calendrier
  private schedule: Schedule;

  // Classement
  private ranking: Ranking;

  // Participants à la compétition
  private competitors: Set<Team>;

  constructor(_competitors: Set<Team>) {
    this.competitors = _competitors;
    this.schedule = new Schedule(_competitors.size);
    this.ranking = new Ranking(_competitors)
  }

  public getCompetitors(): Set<Team> {
    return this.competitors;
  }

  public getSchedule(): Schedule {
    return this.schedule;
  }

  public getRanking(): Ranking {
    return this.ranking;
  }

  public setDaysOfSchedule(_days: Day[]): void {
    this.schedule.setResults(_days);
  }

  public foundMatchsByDay(_day: number): Set<Match> {
    return this.schedule?.getResults()[_day - 1].getResults();
  }

  public getDays(_startingDay: number, _range: number = 1) {
    let days = [];
    let count = 0;
    let lastDay = parseInt(_startingDay.toString()) + parseInt(_range.toString());
    for (let dayIndex = _startingDay; dayIndex < lastDay; dayIndex++) {
      days.push(this.schedule.getResults()[dayIndex - 1]);
      count++;
    }
    return days;
  }

  public resetRanking() {
    this.ranking.reset();
  }

  public updateRanking(_results: Day) {
    for (let match of _results.getResults()) {
      this.saveStatsResults(match.getDomTeam(), match.getScore()[0], match.getScore()[1]);
      this.saveStatsResults(match.getExtTeam(), match.getScore()[1], match.getScore()[0]);
    }

    this.ranking.updateTeamsPositions();
  }

  public saveStatsResults(_team: Team, _goalsScored: number, _goalsConceded: number) {
    _team.stats.addMatchStats(_goalsScored, _goalsConceded);
  }

  public initRanking() {
    this.ranking.setTeamsRankedByPosition(this.getCompetitors());
    this.ranking.reset();
  }
}
