import {Injectable} from '@angular/core';
import {TeamBuilderService} from "../team-builder-service/team-builder.service";

@Injectable({
    providedIn: 'root'
})
export class RatingService {

    public note: number = 0;

    constructor(private teamBuilder: TeamBuilderService) {
    }

    public setRating(playerRating: number): void {
        let nbPlayer: number = 1;
        let allNote: number = 0;
        for (let player of this.teamBuilder.getAllPlayers()) {
            if (player.name != "") {
                nbPlayer += 1
                allNote += player.rating;
            }
        }
        this.note = Math.round((allNote + playerRating) / nbPlayer)
    }

    public clean(): void {
        this.note = 0;
    }

}
