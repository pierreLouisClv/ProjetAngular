import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../Services/data-service/data.service";
import {TeamBuilderService} from "../../Services/team-builder-service/team-builder.service";
import {RatingService} from "../../Services/rating-service/rating.service";
import {Player} from "../../Models/player";

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})

export class DraftComponent implements OnInit {

  public isVisible: boolean = false;

  constructor(private router: Router, private dataService: DataService, public team: TeamBuilderService, public rating: RatingService) {
  }

  ngOnInit(): void {
    let newPlayer = this.dataService.getData();
    this.addPlayerToTheTeam(newPlayer);
    this.showRating();
  }

  private addPlayerToTheTeam(newPlayer: Player): void {
    if (newPlayer.name != "") {
      if (newPlayer.position == "attaquant") {
        if (newPlayer.precision == "Gauche") {
          this.team.setLeftStriker(newPlayer)
        } else if (newPlayer.precision == "Droit") {
          this.team.setRightStriker(newPlayer)
        } else {

          this.team.setStriker(newPlayer)
        }
      } else if (newPlayer.position == "milieuDeTerrain") {
        if (newPlayer.precision == "Gauche") {
          this.team.setLeftMedium(newPlayer)
        } else if (newPlayer.precision == "Droit") {
          this.team.setRightMedium(newPlayer)
        } else {
          this.team.setCentralMedium(newPlayer)
        }
      } else if (newPlayer.position == "defenseurCentral") {
        if (newPlayer.precision == "Droit") {
          this.team.setRightCentreBack(newPlayer)
        } else {
          this.team.setLeftCentreBack(newPlayer)
        }
      } else if (newPlayer.position == "defenseurDroit") {
        this.team.setRightBack(newPlayer)
      } else if (newPlayer.position == "defenseurGauche") {
        this.team.setLeftBack(newPlayer)
      } else {
        this.team.setGoalkeeper(newPlayer)
      }
    }
  }

  private showRating(): void {
    if (this.team.isTeamComplete()) {
      this.showModal();
    }
  }

  public moveToChoixJoueur(position: string, precision: string, nbPlayer: number): void {
    this.router.navigate(['/choix', position, precision, nbPlayer])
  }

  public repeat(): void {
    this.team.clean()
  }

  private showModal(): void {
    this.isVisible = true;
  }

  public hideModal(): void {
    this.isVisible = false;
  }


}
