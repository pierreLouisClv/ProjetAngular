import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../../Model/Player";

@Injectable({
    providedIn: 'root'
})
export class PlayerCreatorService {

    public CreateFromObservable(player: Observable<Player[]>): Player {
        let playerData: any[];
        let newPlayer = new Player();
        player.subscribe((data) => {
            playerData = data;
            for (let i of playerData) {
                newPlayer.setName(i.nom);
                newPlayer.setClub(i.club);
                newPlayer.setAge(i.age);
                newPlayer.setNation(i.nationalite);
                newPlayer.setId(i.ID);
                newPlayer.setPicture(i.image);
                newPlayer.setRating(i.note);
            }
        });
        return newPlayer;
    }

}
