import {Day} from "./day";

export class Schedule {

  private results:Day[];

  constructor(_teamNumber:number) {
    this.results = [];
  }

  public setResults(_days:Day[]):void
  {
    this.results = _days;
  }

  public getResults():Day[]
  {
    return this.results;
  }

  public getDayNumber():number
  {
    return this.getResults().length;
  }

}
