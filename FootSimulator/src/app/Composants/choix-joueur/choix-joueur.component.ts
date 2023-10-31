import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RandomJoueurService} from "../../services/RandomJoueur/random-joueur.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Observable} from "rxjs";
import {DraftComponent} from "../draft/draft.component";
import {JoueurComponent} from "../Model/joueur/joueur.component";
import {EquipeComponent} from "../Model/equipe/equipe.component";
import {DataService} from "../../services/data-service/data.service";

@Component({
  selector: 'app-choix-joueur',
  templateUrl: './choix-joueur.component.html',
  styleUrls: ['./choix-joueur.component.scss']
})
export class ChoixJoueurComponent {

  joueurs:JoueurComponent[]=[];
  position: string ="" ;
  nbJoueur:number =0;
  precision:string="";
  //choixAttaquants:JoueurComponent[]=[]
  constructor(private randomJoueur : RandomJoueurService,private route: ActivatedRoute, private router:Router, private dataService:DataService) {}

  ngOnInit():void {
    this.position =this.route.snapshot.paramMap.get('position')??""
    this.precision =this.route.snapshot.paramMap.get('precision')??""
    this.nbJoueur = parseInt(<string>this.route.snapshot.paramMap.get('nbJoueur'));
    this.joueurs=this.randomJoueur.getRandomJoueur(this.position,this.nbJoueur, this.precision);

  }

public choixJoueur(joueur:JoueurComponent):void{
    this.dataService.sendData(joueur);
    this.router.navigate(['/draft'])
}


  }
