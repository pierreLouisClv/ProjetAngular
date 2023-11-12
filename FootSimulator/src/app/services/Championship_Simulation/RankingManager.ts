import {Ranking} from "../../Models/Simulation/Ranking/Ranking";

export class RankingManager {

  private ranking: Ranking | undefined;

  constructor(){
  }

  public setRanking(_ranking:Ranking) {
    this.ranking = _ranking;
  }
}
