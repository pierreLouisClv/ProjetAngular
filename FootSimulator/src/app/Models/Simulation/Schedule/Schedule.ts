import {Day} from "./Day";

export class Schedule {

  // Journées du championnat
  private results:Day[];

  constructor(_teamNumber:number) {
    let numberOfDayToPlay:number = (_teamNumber * 2) - 2;
    // Nombres de journées dans le championnat
    this.results = [];
  }

  public setResults(_days:Day[])
  {
    this.results = _days;
  }

  public getResults()
  {
    return this.results;
  }

  public getDayNumber()
  {
    return this.getResults().length;
  }

}
