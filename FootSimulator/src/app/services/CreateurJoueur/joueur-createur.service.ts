import { Injectable } from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {JoueurComponent} from "../../Composants/Model/joueur/joueur.component";
@Injectable({
  providedIn: 'root'
})
export class JoueurCreateurService {


  constructor() { }

  CreateFromObservable(joueur:Observable<any>):JoueurComponent{
    let player : any[];
    let newJoueur = new JoueurComponent();
    joueur.subscribe((data: any[]) => {
      player=data;
        for(let i of player){
          newJoueur.setNom(i.nom);
          newJoueur.setClub(i.club);
          newJoueur.setAge(i.age);
          newJoueur.setNation(i.nationalite);
          newJoueur.setId(i.ID);
        }
    });
    return newJoueur;
  }
/*
  create(nom:string,age:number,club:string,nation:string): JoueurComponent {
    let joueur = new JoueurComponent();
    joueur.setNom(nom);
    joueur.setAge(age);
    joueur.setClub(club);
    joueur.setNation(nation);

    return joueur;
  }

  getJoueurVide():JoueurComponent{
    return new JoueurComponent()
  }


 */
}
