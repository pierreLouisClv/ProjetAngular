import {Match} from "../../Models/Simulation/Schedule/match";
import {EnumResult} from "../../Models/Simulation/Schedule/enumResult";
import {ScoreProbabilities} from "../../Utils/scoreProbabilities";

export class ScoreGenerator {
  private HOME_ADVANTAGE_STRENGTH_POINTS: number = 4;

  private DRAW_RESULTS_PROBABILITY: number = 0.35;

  public generateRandomWinner(_match: Match, _isStrengthPointsActivated: boolean): void {
    if (_isStrengthPointsActivated) {
      let result: EnumResult = this.generateRandomResultIncludingStrengthPoints(_match.getDomTeam().strengthPoints, _match.getExtTeam().strengthPoints);
      _match.setEnumResult(result);
    } else {
      let randomInt: number = Math.floor(Math.random() * 3);
      if (randomInt == 0) {
        _match.setEnumResult(EnumResult.D);
      } else if (randomInt == 1) {
        _match.setEnumResult(EnumResult.N);
      } else {
        _match.setEnumResult(EnumResult.E);
      }
    }
  }

  public generateRandomScore(match: Match): void {
    let randomFloat: number = Math.random();
    switch (match.getEnumResult()) {
      case EnumResult.D :
        let randomWinDom: number[] = this.pickScore(ScoreProbabilities.winScoreProbabilities, randomFloat);
        match.setFinalScore(randomWinDom[0], randomWinDom[1]);
        break;
      case EnumResult.E :
        let randomWinExt: number[] = this.pickScore(ScoreProbabilities.winScoreProbabilities, randomFloat);
        match.setFinalScore(randomWinExt[1], randomWinExt[0]);
        break
      default :
        let randomDraw: number[] = this.pickScore(ScoreProbabilities.drawScoreProbabilities, randomFloat);
        match.setFinalScore(randomDraw[0], randomDraw[1]);
    }
  }

  private pickScore(_map: Map<Array<number>, number>, float: number): Array<number> {
    let randomScore;

    for (let [score, proba] of _map) {
      if (float < proba) {
        randomScore = score;
        break;
      }
    }

    if (randomScore == undefined) {
      console.log("Aucun score trouvé pour le nombre " + float);
      return [0, 0];
    } else {
      return randomScore;
    }
  }

  private generateRandomResultIncludingStrengthPoints(_domTeamStrengthPoints: number, _extTeamStrengthPoints: number): EnumResult {
    let resultCollection: EnumResult[] = new Array<EnumResult>();
    for (let i: number = 1; i <= (_domTeamStrengthPoints) + this.HOME_ADVANTAGE_STRENGTH_POINTS; i++) {
      resultCollection.push(EnumResult.D);
    }
    for (let i: number = 1; i <= (_extTeamStrengthPoints); i++) {
      resultCollection.push(EnumResult.E);
    }
    let drawCounter: number = this.determineNumberOfDraws(resultCollection.length, _domTeamStrengthPoints, _extTeamStrengthPoints);
    for (let i: number = 1; i <= drawCounter; i++) {
      resultCollection.push(EnumResult.N);
    }
    return this.pickRandomElementFromCollection(resultCollection);
  }

  private pickRandomElementFromCollection(collection: Array<any>): any {
    let randomIndex: number = Math.floor(Math.random() * collection.length);
    return Array.from(collection)[randomIndex];
  }

  private determineNumberOfDraws(_lengthCollection: number, _domTeamSP: number, _extTeamSP: number): number {
    return Math.floor(_lengthCollection * (this.DRAW_RESULTS_PROBABILITY - ((_domTeamSP - _extTeamSP) / 10)));
  }
}
