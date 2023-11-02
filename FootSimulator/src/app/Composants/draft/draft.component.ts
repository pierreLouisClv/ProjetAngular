import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {JoueurComponent} from "../Model/joueur/joueur.component";
import {EquipeComponent} from "../Model/equipe/equipe.component";
import {DataService} from "../../services/data-service/data.service";
import {EquipeBuilderService} from "../../services/CreateurEquipe/equipe-builder.service";

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})

export class DraftComponent {

equipe:EquipeComponent;
  constructor(private router: Router, private dataService:DataService, private equipebuilder:EquipeBuilderService) {
    this.equipe = equipebuilder.getEquipe();
  }

  ngOnInit():void{
    let newJoueur = this.dataService.getData();
    if(newJoueur.nom!=""){
      if(newJoueur.position=="attaquant"){
        if(newJoueur.precision=="Gauche"){
          this.equipe.setAttaquantsGauche(newJoueur)
        }
        else if(newJoueur.precision=="Droit"){
          this.equipe.setAttaquantsDroit(newJoueur)
        }
        else{

          this.equipe.setAttaquantsPointe(newJoueur)
        }
      }
      else if(newJoueur.position=="milieuDeTerrain"){
        if(newJoueur.precision=="Gauche"){
          this.equipe.setMilieuGauche(newJoueur)
        }
        else if(newJoueur.precision=="Droit"){
          this.equipe.setMilieuDroit(newJoueur)
        }
        else{
          this.equipe.setMilieuCentral(newJoueur)
        }
      }
      else if (newJoueur.position=="defenseurCentral"){
        if(newJoueur.precision=="Droit"){
          this.equipe.setDefenseurCentralDroit(newJoueur)
        }
        else{
          this.equipe.setDefenseurCentralGauche(newJoueur)
        }
      }
      else if (newJoueur.position=="defenseurDroit"){
        this.equipe.setDefenseurDroit(newJoueur)
      }
      else if (newJoueur.position=="defenseurGauche"){
        this.equipe.setDefenseurGauche(newJoueur)
      }
      else{
        this.equipe.setGardien(newJoueur)
      }
    }

  }

  moveToChoixJoueur(position:string,precision:string,nbJoueur:number):void{
    this.router.navigate(['/choix',position,precision,nbJoueur])
  }

  repeat(){
    this.equipebuilder.getEquipe().clean()
  }






}
