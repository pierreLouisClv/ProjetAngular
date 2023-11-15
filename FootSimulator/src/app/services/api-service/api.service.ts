import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayerCreatorService} from "../player-creator-service/player-creator.service";
import {Player} from "../../Models/player";
import {Team} from "../../Models/team";
import {Classmate} from "../../Models/classmate";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient, private playerService: PlayerCreatorService) {

    }

    public getTeams(): Observable<Team[]> {
      return this.http.get<Team[]>(`${this.apiUrl}/teams`);
    }

    public getPlayerByPosition(position: string): Player {
        return this.playerService.CreateFromObservable(this.http.get<Player[]>(`${this.apiUrl}/${position}`));
    }

    public getMiageNames(): Observable<Classmate[]>
    {
      return this.http.get<Classmate[]>(`${this.apiUrl}/classmates`);
    }

}
