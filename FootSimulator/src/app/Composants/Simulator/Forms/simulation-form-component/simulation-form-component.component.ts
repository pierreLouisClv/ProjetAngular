import {Component, NgModule} from '@angular/core';
import {
  ChampionshipSimulatorService
} from "../../../../services/Championship_Simulation/championship-simulator.service";

@Component({
  selector: 'app-simulation-form-component',
  templateUrl: './simulation-form-component.component.html',
  styleUrls: ['./simulation-form-component.component.scss']
})
export class SimulationFormComponentComponent {

  allDaysNumber:number[];

  firstDayToSimulate:number;

  nbOfDayToSimulate:number;

  constructor(private simulator:ChampionshipSimulatorService) {
    this.allDaysNumber = this.genereAllDaysNumber();
    this.firstDayToSimulate = this.allDaysNumber[0];
    this.nbOfDayToSimulate = 1;
  }

  public genereAllDaysNumber()
  {
    let dayNb = this.simulator.getSchedule().getDayNumber();
    let numberList = new Array<number>()
    for (let dayIndex = 0; dayIndex < dayNb; dayIndex ++)
    {
      numberList.push(dayIndex + 1);
    }

    return numberList;
  }

  public simulateDays()
  {
    if (parseInt(this.firstDayToSimulate.toString()) + parseInt(this.nbOfDayToSimulate.toString()) - 1 > this.allDaysNumber.length)
    {
      console.log("Pas de simulation possible");
    }
    else
    {
      this.simulator.simulateDays(this.firstDayToSimulate, this.nbOfDayToSimulate);
    }
  }
}
