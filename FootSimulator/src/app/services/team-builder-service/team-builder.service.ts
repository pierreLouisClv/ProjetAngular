import {Injectable} from '@angular/core';
import {Player} from "../../Model/Player";

@Injectable({
    providedIn: 'root'
})
export class TeamBuilderService {

    public goalkeeper: Player = new Player();
    public leftBack: Player = new Player();
    public rightBack: Player = new Player();
    public leftCentreBack: Player = new Player();
    public rightCentreBack: Player = new Player();
    public centralMedium: Player = new Player();
    public rightMedium: Player = new Player();
    public leftMedium: Player = new Player();
    public striker: Player = new Player();
    public rightStriker: Player = new Player();
    public leftStriker: Player = new Player();

    public getAllPlayers(): Player[] {
        let team: Player[] = [];
        team.push(this.goalkeeper);
        team.push(this.rightBack);
        team.push(this.leftBack);
        team.push(this.rightCentreBack);
        team.push(this.leftCentreBack);
        team.push(this.centralMedium);
        team.push(this.rightMedium);
        team.push(this.leftMedium);
        team.push(this.rightStriker);
        team.push(this.leftStriker);
        team.push(this.striker);
        return team;
    }

    public isTeamComplete(): boolean {
        let complete: boolean = true;
        for (let player of this.getAllPlayers()) {
            if (player.name == "") {
                complete = false
            }
        }
        return complete;
    }

    private getAllStrikers(): Player[] {
        let strikers: Player[] = [];
        strikers.push(this.rightStriker);
        strikers.push(this.leftStriker);
        strikers.push(this.striker);
        return strikers;
    }

    private getAllMediums(): Player[] {
        let mediums: Player[] = [];
        mediums.push(this.centralMedium);
        mediums.push(this.rightMedium);
        mediums.push(this.leftMedium);
        return mediums;
    }

    private getAllCentreBack(): Player[] {
        let backs: Player[] = [];
        backs.push(this.rightCentreBack);
        backs.push(this.leftCentreBack);
        return backs;
    }

    public getAllIdByPosition(position: string): number[] {
        let allId: number[] = [];
        if (position == "attaquant") {
            for (let player of this.getAllStrikers()) {
                allId.push(player.id)
            }
        } else if (position == "milieuDeTerrain") {
            for (let player of this.getAllMediums()) {
                allId.push(player.id)
            }
        } else if (position == "defenseurCentral") {
            for (let player of this.getAllCentreBack()) {
                allId.push(player.id)
            }
        } else {
            return allId
        }
        return allId
    }

    public clean(): void {
        this.goalkeeper = new Player();
        this.leftBack = new Player();
        this.rightBack = new Player();
        this.leftCentreBack = new Player();
        this.rightCentreBack = new Player();
        this.centralMedium = new Player();
        this.rightMedium = new Player();
        this.leftMedium = new Player();
        this.striker = new Player();
        this.rightStriker = new Player();
        this.leftStriker = new Player();
    }

    public setGoalkeeper(goalkeeper: Player): void {
        this.goalkeeper = goalkeeper;
    }

    public setLeftBack(leftBack: Player): void {
        this.leftBack = leftBack;
    }

    public setLeftCentreBack(centreBack: Player): void {
        this.leftCentreBack = centreBack;
    }

    public setRightCentreBack(centreBack: Player): void {
        this.rightCentreBack = centreBack;
    }

    public setRightBack(rightBack: Player): void {
        this.rightBack = rightBack;
    }

    public setCentralMedium(centralMedium: Player): void {
        this.centralMedium = centralMedium;
    }

    public setRightMedium(rightMedium: Player): void {
        this.rightMedium = rightMedium;
    }

    public setLeftMedium(leftMedium: Player): void {
        this.leftMedium = leftMedium;
    }

    public setStriker(striker: Player): void {
        this.striker = striker;
    }

    public setRightStriker(rightStriker: Player): void {
        this.rightStriker = rightStriker;
    }

    public setLeftStriker(leftStriker: Player): void {
        this.leftStriker = leftStriker;
    }

}
