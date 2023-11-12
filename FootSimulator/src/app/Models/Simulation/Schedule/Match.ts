import {Team} from "../../Team";
import {EnumResult} from "./EnumResult";

export class Match {
  private domTeam:Team;

  private extTeam:Team;

  private enumResult?:EnumResult;

  private isMatchPlayed:boolean;

  private isScoreModified:boolean;

  private finalScore:Array<number>;

  constructor(_firstOpponent:Team,
              _secondOpponent:Team) {
    this.domTeam = _firstOpponent;
    this.extTeam = _secondOpponent;
    this.isMatchPlayed = false;
    this.isScoreModified = true;
    this.finalScore = new Array<number>(2);
  }

  public getDomTeam()
  {
    return this.domTeam;
  }

  public getExtTeam()
  {
    return this.extTeam;
  }

  public getIsScoreModified()
  {
    return this.isScoreModified;
  }

  public getIsMatchPlayed()
  {
    return this.isMatchPlayed;
  }

  public getScore()
  {
    return this.finalScore;
  }

  public setIsMatchPlayed(_isPlayed:boolean)
  {
    this.isMatchPlayed = _isPlayed;
  }

  public setIsScoreModified(_isModified:boolean)
  {
    this.isScoreModified = _isModified;
  }

  public setEnumResult(result:EnumResult)
  {
    this.enumResult = result;
  }

  public getEnumResult()
  {
    return this.enumResult;
  }

  public setFinalScore(domScore:number, extScore:number)
  {
    this.finalScore[0] = domScore;
    this.finalScore[1] = extScore;
  }
}
