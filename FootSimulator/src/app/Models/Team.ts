import {TeamStatistics} from "./Simulation/Ranking/TeamStatistics";

export interface Team {
  name: string;
  pathLogo: string;
  stats:TeamStatistics;
}
