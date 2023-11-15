import {Team} from "../../team";
import {TeamStatistics} from "./teamStatistics";

export class Ranking {
  private teamsRankedByPosition: Team[];

  constructor(_competitors: Set<Team>) {
    this.teamsRankedByPosition = Array.from(_competitors);
  }

  public reset(): void {
    for (let team of this.teamsRankedByPosition) {
      team.stats = new TeamStatistics();
    }
  }

  public updateTeamsPositions(): void {
    this.teamsRankedByPosition.sort((_team1: Team, _team2: Team) => {
      let returnNb: number;
      if ((returnNb = this.comparePoints(_team1, _team2)) == 0) {
        if ((returnNb = this.compareGoalsDifference(_team1, _team2)) == 0) {
          if ((returnNb = this.compareGoalsScored(_team1, _team2)) == 0) {
            return returnNb;
          }
        }
      }
      return returnNb;
    })

  }

  public comparePoints(_team1: Team, _team2: Team): 1 | -1 | 0 {
    if (_team1.stats.getPoints() > _team2.stats.getPoints()) {
      return -1;
    } else if (_team1.stats.getPoints() < _team2.stats.getPoints()) {
      return 1;
    } else {
      return 0;
    }
  }

  public compareGoalsDifference(_team1: Team, _team2: Team): 1 | -1 | 0 {
    if (_team1.stats.getGoalsDifference() > _team2.stats.getGoalsDifference()) {
      return -1;
    } else if (_team1.stats.getGoalsDifference() < _team2.stats.getGoalsDifference()) {
      return 1;
    } else {
      return 0;
    }
  }

  public compareGoalsScored(_team1: Team, _team2: Team): 1 | -1 | 0 {
    if (_team1.stats.getGoalsScored() > _team2.stats.getGoalsScored()) {
      return -1;
    } else if (_team1.stats.getGoalsScored() < _team2.stats.getGoalsScored()) {
      return 1;
    } else {
      return 0;
    }
  }

  public getTeamsRankedByPosition(): Team[] {
    return this.teamsRankedByPosition;
  }

  public setTeamsRankedByPosition(_teams: Set<Team>): void {
    this.teamsRankedByPosition = Array.from(_teams);
  }
}
