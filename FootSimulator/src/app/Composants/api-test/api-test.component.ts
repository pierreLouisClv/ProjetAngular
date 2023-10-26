import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss']
})
export class ApiTestComponent {
  teams: any[] | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTeams().subscribe((data: any[]) => {
      this.teams = data;
    });
  }
}
