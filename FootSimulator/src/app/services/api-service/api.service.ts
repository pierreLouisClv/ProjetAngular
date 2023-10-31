import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JoueurCreateurService} from "../CreateurJoueur/joueur-createur.service";
import {JoueurComponent} from "../../Composants/Model/joueur/joueur.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000';
  joueurService:JoueurCreateurService=new JoueurCreateurService();
  constructor(public http: HttpClient) {

  }

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/teams`);

  }
/*
  getPlayerByPositionAndId(position:string,id:number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${position}/${id}`);
  }
 */
  getPlayerByPosition(position:string): JoueurComponent {
    return this.joueurService.CreateFromObservable(this.http.get<any>(`${this.apiUrl}/${position}`));
  }



}
