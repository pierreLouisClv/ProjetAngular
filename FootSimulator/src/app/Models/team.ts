import {TeamStatistics} from "./Simulation/Ranking/teamStatistics";
import {Classmate} from "./classmate";

export interface Team {
  name: string;
  pathLogo: string;
  strengthPoints: number;
  stats: TeamStatistics;
  owner: Classmate;
}
