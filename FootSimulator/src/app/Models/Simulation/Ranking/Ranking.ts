import {Team} from "../../Team";
import {TeamStatistics} from "./TeamStatistics";

export class Ranking {
  private teamsRankedByPosition:Team[];

  private daysPlayed:number;

  constructor(_competitors:Set<Team>) {
    // Attention à ne pas conserver la référence du tab
    this.teamsRankedByPosition = Array.from(_competitors);
    this.daysPlayed = 0;
  }

  public reset()
  {
    for (let team of this.teamsRankedByPosition)
    {
      team.stats = new TeamStatistics();
    }
  }

  public updateTeamsPositions()
  {
    this.teamsRankedByPosition.sort((_team1:Team, _team2:Team) => {
        let returnNb:number;
        if ((returnNb = this.comparePoints(_team1, _team2)) == 0)
        {
          if ((returnNb = this.compareGoalsDifference(_team1, _team2)) == 0)
          {
            if ((returnNb = this.compareGoalsScored(_team1, _team2)) == 0)
            {
              return returnNb;
            }
          }
        }
        return returnNb;
      })

  }

  public comparePoints(_team1:Team, _team2:Team)
  {
    if (_team1.stats.getPoints() > _team2.stats.getPoints())
    {
      return -1;
    }
    else if (_team1.stats.getPoints() < _team2.stats.getPoints())
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  public compareGoalsDifference(_team1:Team, _team2:Team)
  {
    if (_team1.stats.getGoalsDifference() > _team2.stats.getGoalsDifference())
    {
      return -1;
    }
    else if (_team1.stats.getGoalsDifference() < _team2.stats.getGoalsDifference())
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  public compareGoalsScored(_team1:Team, _team2:Team)
  {
    if (_team1.stats.getGoalsScored() > _team2.stats.getGoalsScored())
    {
      return -1;
    }
    else if (_team1.stats.getGoalsScored() < _team2.stats.getGoalsScored())
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

  public getTeamsRankedByPosition()
  {
    return this.teamsRankedByPosition;
  }

  public setTeamsRankedByPosition(_teams:Set<Team>)
  {
    this.teamsRankedByPosition = Array.from(_teams);
  }
}
