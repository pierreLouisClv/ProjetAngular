import { Injectable } from '@angular/core';
import {JoueurComponent} from "../../Composants/Model/joueur/joueur.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  joueur:JoueurComponent=new JoueurComponent()
  constructor() { }

  sendData(newJoueur:JoueurComponent):void{
    this.joueur=newJoueur;
  }

  getData():JoueurComponent{
    return this.joueur
  }

}
