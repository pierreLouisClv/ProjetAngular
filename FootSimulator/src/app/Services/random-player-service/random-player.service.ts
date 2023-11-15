import {Injectable} from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {TeamBuilderService} from "../team-builder-service/team-builder.service";
import {Player} from "../../Models/player";

@Injectable({
  providedIn: 'root'
})
export class RandomPlayerService {

  constructor(private apiService: ApiService, private teamBuilder: TeamBuilderService) {
  }

  public getRandomPlayer(position: string, nbPlayer: number, precision: string): Player[] {
    let idAlreadyUsed: number[] = [];
    let players: Player[] = [];
    let idAlreadyChose = this.teamBuilder.getAllIdByPosition(position);
    for (let i: number = 0; i < 4; i++) {
      let randomId: number = this.getRandomNumber(1, nbPlayer + 1);
      while (idAlreadyUsed.includes(randomId) || idAlreadyChose.includes(randomId)) {
        randomId = this.getRandomNumber(1, nbPlayer + 1);
      }
      let newPlayer: Player = this.apiService.getPlayerByPosition(position + "" + randomId);
      newPlayer.setPosition(position);
      newPlayer.setPrecision(precision);
      players.push(newPlayer);
      idAlreadyUsed.push(randomId);
    }
    return players
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
