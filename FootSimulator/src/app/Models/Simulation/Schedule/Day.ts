import {Match} from "./Match";

export class Day {
  //private dayNumber:number;

  private results:Set<Match>;

  constructor() {
    this.results = new Set<Match>();
  }
  public addOpposition(_match:Match)
  {
    this.results.add(_match);
  }

  public getNumberOfMatchs():number
  {
    return this.results.size;
  }

  public getResults()
  {
    return this.results;
  }
}
