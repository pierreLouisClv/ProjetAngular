import {Team} from "../../team";
import {EnumResult} from "./enumResult";

export class Match {
  private readonly domTeam:Team;

  private readonly extTeam:Team;

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

  public getDomTeam():Team
  {
    return this.domTeam;
  }

  public getExtTeam():Team
  {
    return this.extTeam;
  }

  public getIsScoreModified():boolean
  {
    return this.isScoreModified;
  }

  public getIsMatchPlayed():boolean
  {
    return this.isMatchPlayed;
  }

  public getScore():Array<number>
  {
    return this.finalScore;
  }

  public setIsMatchPlayed(_isPlayed:boolean):void
  {
    this.isMatchPlayed = _isPlayed;
  }

  public setIsScoreModified(_isModified:boolean):void
  {
    this.isScoreModified = _isModified;
  }

  public setEnumResult(result:EnumResult):void
  {
    this.enumResult = result;
  }

  public getEnumResult():EnumResult|undefined
  {
    return this.enumResult;
  }

  public setFinalScore(domScore:number, extScore:number):void
  {
    this.finalScore[0] = domScore;
    this.finalScore[1] = extScore;
  }
}
