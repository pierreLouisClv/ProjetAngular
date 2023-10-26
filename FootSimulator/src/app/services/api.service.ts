import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teams`);
  }
}
