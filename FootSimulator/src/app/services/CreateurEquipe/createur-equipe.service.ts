import { Injectable } from '@angular/core';
import {EquipeComponent} from "../../Composants/Model/equipe/equipe.component";
import {JoueurCreateurService} from "../CreateurJoueur/joueur-createur.service";

@Injectable({
  providedIn: 'root'
})
export class CreateurEquipeService {

  joueurService = new JoueurCreateurService()
  constructor() { }
/*
  getEquipeVide():EquipeComponent{
    return new EquipeComponent(
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      this.joueurService.getJoueurVide(),
      )
  }

 */
}
