import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../../Model/Player";

@Injectable({
    providedIn: 'root'
})
export class PlayerCreatorService {

    public CreateFromObservable(player: Observable<any>): Player {
        let playerData: any[];
        let newJoueur = new Player();
        player.subscribe((data: any[]) => {
            playerData = data;
            for (let i of playerData) {
                newJoueur.setName(i.nom);
                newJoueur.setClub(i.club);
                newJoueur.setAge(i.age);
                newJoueur.setNation(i.nationalite);
                newJoueur.setId(i.ID);
                newJoueur.setPicture(i.image);
                newJoueur.setRating(i.note);
            }
        });
        return newJoueur;
    }

}
