import { Injectable } from '@angular/core';
import {ApiService} from "../api-service/api.service";
import {Observable} from "rxjs";
import {JoueurComponent} from "../../Composants/Model/joueur/joueur.component";
import {EquipeBuilderService} from "../CreateurEquipe/equipe-builder.service";

@Injectable({
  providedIn: 'root'
})
export class RandomJoueurService {

  constructor(private apiService:ApiService,private equipebuilder:EquipeBuilderService) { }

  getRandomJoueur(poste: string, nbJoueur: number, precision:string):JoueurComponent[]{
    let idAlreadyUsed:number[]=[];
    let joueurs:JoueurComponent[]=[];
    let idAlreadyChose =  this.equipebuilder.getEquipe().getAllIdByPosition(poste);

    for(let i=0;i<4;i++){
      let randomId = this.getRandomNumber(1,nbJoueur+1);
      while(idAlreadyUsed.includes(randomId) || idAlreadyChose.includes(randomId)){
        randomId = this.getRandomNumber(1,nbJoueur+1);
      }
      let newJoueur = this.apiService.getPlayerByPosition(poste+""+randomId);
      newJoueur.setPosition(poste);
      newJoueur.setPrecision(precision);
      joueurs.push(newJoueur);
      idAlreadyUsed.push(randomId);
    }
    return joueurs
  }

  // Génère un nombre au hasard entre min (inclus) et max (exclus)
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
