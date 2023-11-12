import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlayerCreatorService} from "../player-creator-service/player-creator.service";
import {Player} from "../../Model/Player";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl: string = 'http://localhost:3000';

    constructor(private http: HttpClient, private playerService: PlayerCreatorService) {

    }

    getTeams(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/teams`);
    }

    public getPlayerByPosition(position: string): Player {
        return this.playerService.CreateFromObservable(this.http.get<Player>(`${this.apiUrl}/${position}`));
    }

}
