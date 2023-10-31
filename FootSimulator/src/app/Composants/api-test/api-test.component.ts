import { Component } from '@angular/core';
import {ApiService} from "../../services/api-service/api.service";
import {EquipeBuilderService} from "../../services/CreateurEquipe/equipe-builder.service";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})


export class ApiTestComponent {
  teams: any[] | undefined;
message:string=""
  equipeBuilder:EquipeBuilderService;
  constructor(private apiService: ApiService, equipeBuiler:EquipeBuilderService) {
    this.equipeBuilder= equipeBuiler;
  }

  ngOnInit() {
    this.apiService.getTeams().subscribe((data: any[]) => {
      this.teams = data;
    });

  }

  public action($event:any):void{
  console.log($event)
    this.message = $event
  }
}
