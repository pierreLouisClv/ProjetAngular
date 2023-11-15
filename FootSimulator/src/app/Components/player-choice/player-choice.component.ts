import {Component, OnInit} from '@angular/core';
import {RandomPlayerService} from "../../Services/random-player-service/random-player.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../Services/data-service/data.service";
import {Player} from "../../Models/player";
import {RatingService} from "../../Services/rating-service/rating.service";

@Component({
  selector: 'app-player-choice',
  templateUrl: './player-choice.component.html',
  styleUrls: ['./player-choice.component.scss']
})
export class PlayerChoiceComponent implements OnInit {

  public player1: Player = new Player();
  public player2: Player = new Player();
  public player3: Player = new Player();
  public player4: Player = new Player();

  constructor(private randomPlayer: RandomPlayerService, private route: ActivatedRoute, private router: Router, private dataService: DataService, private rating: RatingService) {
  }

  ngOnInit(): void {
    let position: string = this.route.snapshot.paramMap.get('position') ?? ""
    let precision: string = this.route.snapshot.paramMap.get('precision') ?? ""
    let nbPlayer: number = parseInt(<string>this.route.snapshot.paramMap.get('nbJoueur'));
    let player: Player[] = this.randomPlayer.getRandomPlayer(position, nbPlayer, precision);
    this.player1 = player[0];
    this.player2 = player[1];
    this.player3 = player[2];
    this.player4 = player[3];
  }

  public playerChoice(player: Player): void {
    this.dataService.sendData(player);
    this.rating.setRating(player.rating);
    this.router.navigate(['/draft'])
  }
}
