import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Team} from "../../Models/Team";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent {
  teams!: Team[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTeams().subscribe((data: Team[] ) => {
      this.teams = data;
    });
  }
}
