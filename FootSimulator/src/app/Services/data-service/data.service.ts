import {Injectable} from '@angular/core';
import {Player} from "../../Models/player";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private player: Player = new Player()

  public sendData(newPlayer: Player): void {
    this.player = newPlayer;
  }

  public getData(): Player {
    return this.player
  }

}
