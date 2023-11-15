import {Injectable} from '@angular/core';
import {Player} from "../../Models/player";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private player: Player = new Player()

  public sendData(newJoueur: Player): void {
    this.player = newJoueur;
  }

  public getData(): Player {
    return this.player
  }

}
