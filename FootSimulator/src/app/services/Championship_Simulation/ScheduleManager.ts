import {Schedule} from "../../Models/Simulation/Schedule/Schedule";
import {Match} from "../../Models/Simulation/Schedule/Match";
import {Day} from "../../Models/Simulation/Schedule/Day";

export class ScheduleManager {

  private schedule: Schedule;

  constructor(_schedule:Schedule) {
    this.schedule = _schedule;
  }

  public setSchedule(_schedule:Schedule) {
    this.schedule = _schedule;
  }

  public initSchedule(_days:Day[])
  {
  }

  public foundMatchsByDay(_day:number):Set<Match>
  {
    return this.schedule?.getResults()[_day - 1].getResults();
  }
}
