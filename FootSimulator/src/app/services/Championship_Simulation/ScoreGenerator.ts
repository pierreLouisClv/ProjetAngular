import {Match} from "../../Models/Simulation/Schedule/Match";
import {EnumResult} from "../../Models/Simulation/Schedule/EnumResult";
import {ScoreProbabilities} from "../../Probability/ScoreProbabilities";

export class ScoreGenerator
{
  public generateRandomWinner(match:Match):void
  {
    let randomInt:number = Math.floor( Math.random() * 3);
    if(randomInt == 0)
    {
      match.setEnumResult(EnumResult.D);
    }
    else if(randomInt == 1)
    {
        match.setEnumResult(EnumResult.N);
    }
    else
    {
        match.setEnumResult(EnumResult.E);
    }
  }

  public generateRandomScore(match:Match)
  {
    let randomFloat = Math.random();
    switch (match.getEnumResult())
    {
        case EnumResult.D :
            let randomWinDom = this.pickScore(ScoreProbabilities.winScoreProbabilities, randomFloat);
            match.setFinalScore(randomWinDom[0], randomWinDom[1]);
            break;
        case EnumResult.E :
            let randomWinExt = this.pickScore(ScoreProbabilities.winScoreProbabilities, randomFloat);
            match.setFinalScore(randomWinExt[1], randomWinExt[0]);
            break
        default :
          let randomDraw = this.pickScore(ScoreProbabilities.drawScoreProbabilities, randomFloat);
          match.setFinalScore(randomDraw[0], randomDraw[1]);
    }
  }

  private pickScore(_map:Map<Array<number>, number>, float:number):Array<number> {
      let randomScore;

      for (let [score, proba] of _map)
      {
        if (float < proba)
        {
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
}
