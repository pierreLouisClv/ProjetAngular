import { Component } from '@angular/core';
import {ApiService} from "../../services/api-service/api.service";
import {ChampionshipSimulatorService} from "../../services/simulation-services/championship-simulator.service";
import {Team} from "../../Models/team";
import {Classmate} from "../../Models/classmate";

@Component({
  selector: 'app-presentation-banner',
  templateUrl: './presentation-banner.component.html',
  styleUrls: ['./presentation-banner.component.scss']
})
export class PresentationBannerComponent {

  public names:Set<Classmate>;

  public teams:Set<Team>;

  public areTeamNamesOk:boolean;

  constructor(private apiService:ApiService,
              private simulator:ChampionshipSimulatorService)
  {
    this.names = new Set<Classmate>();
    this.teams = new Set<Team>();
    this.areTeamNamesOk = false;
  }

  ngOnInit():void
  {
    this.apiService.getMiageNames().subscribe((data: Classmate[] ) => {
      this.names = new Set<Classmate>(data);
    });

    this.teams = this.simulator.getChampionship().getCompetitors();
  }

  public randomizeTeamOwners():void
  {
    /*let ownerTeams:Team[] = Array.from(this.teams);
    let teamOwners:Classmate[] = Array.from(this.names);
    let collectionsSize:number = ownerTeams.length;
    let count:number = 0;
    while(collectionsSize - count >= 0)
    {
      let teamRandomIndex = Math.floor(Math.random() * collectionsSize - count)
      let ownerRandomIndex = Math.floor(Math.random() * collectionsSize - count);
      ownerTeams[ownerRandomIndex].owner = teamOwners[teamRandomIndex];
      teamOwners.
      ownerTeams.pop(ownerRandomIndex);
      count ++;
    }*/
  }
}
