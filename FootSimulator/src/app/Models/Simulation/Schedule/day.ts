import {Match} from "./match";

export class Day {

  private results:Set<Match>;

  constructor() {
    this.results = new Set<Match>();
  }
  public addOpposition(_match:Match):void
  {
    this.results.add(_match);
  }

  public getResults():Set<Match>
  {
    return this.results;
  }
}
