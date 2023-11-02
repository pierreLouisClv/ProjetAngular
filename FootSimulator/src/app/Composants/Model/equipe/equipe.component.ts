import { Component } from '@angular/core';
import {JoueurComponent} from "../joueur/joueur.component";

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {

  private gardien: JoueurComponent = new JoueurComponent();
  private defenseurGauche: JoueurComponent = new JoueurComponent();
  private defenseurDroit: JoueurComponent =new JoueurComponent();
  private defenseursCentralGauche: JoueurComponent =new JoueurComponent();
  private defenseursCentralDroit: JoueurComponent=new JoueurComponent();
  private milieuCentral: JoueurComponent=new JoueurComponent();
  private milieuDroit: JoueurComponent=new JoueurComponent();
  private milieuGauche: JoueurComponent=new JoueurComponent();
  private attaquantsPointe: JoueurComponent=new JoueurComponent();
  private attaquantsDroit: JoueurComponent=new JoueurComponent();
  private attaquantsGauche: JoueurComponent=new JoueurComponent();

  constructor(
  ) {
  }

  // Getters

  getAllJoueur():JoueurComponent[]{
    let equipe : JoueurComponent[] =[];
    equipe.push(this.gardien);
    equipe.push(this.defenseurDroit);
    equipe.push(this.defenseurGauche);
    equipe.push(this.defenseursCentralDroit);
    equipe.push(this.defenseursCentralGauche);
    equipe.push(this.milieuCentral);
    equipe.push(this.milieuDroit);
    equipe.push(this.milieuGauche);
    equipe.push(this.attaquantsDroit);
    equipe.push(this.attaquantsGauche);
    equipe.push(this.attaquantsPointe);
    return equipe;
  }

  getAllAttaquants():JoueurComponent[]{
    let attaquants : JoueurComponent[] =[];
    attaquants.push(this.attaquantsDroit);
    attaquants.push(this.attaquantsGauche);
    attaquants.push(this.attaquantsPointe);

    return attaquants;
  }

  getAllMilieux():JoueurComponent[]{
    let milieux : JoueurComponent[] =[];
    milieux.push(this.milieuCentral);
    milieux.push(this.milieuDroit);
    milieux.push(this.milieuGauche);

    return milieux;
  }

  getAllDefenseursCentraux():JoueurComponent[]{
    let defenseurs : JoueurComponent[] =[];
    defenseurs.push(this.defenseursCentralDroit);
    defenseurs.push(this.defenseursCentralGauche);

    return defenseurs;
  }

  getAllIdByPosition(position:string):number[]{
    let allId:number[]=[];
    if(position=="attaquant"){
      for(let joueur of this.getAllAttaquants()){
        allId.push(joueur.getId())
      }
    }
    else if(position=="milieuDeTerrain"){
      for(let joueur of this.getAllMilieux()){
        allId.push(joueur.getId())
      }
    }
    else if(position=="defenseurCentral"){
      for(let joueur of this.getAllDefenseursCentraux()){
        allId.push(joueur.getId())
      }
    }
    else{
      return allId
    }
    return allId
  }

  clean():void{
  this.gardien= new JoueurComponent();
  this.defenseurGauche= new JoueurComponent();
  this.defenseurDroit=new JoueurComponent();
  this.defenseursCentralGauche=new JoueurComponent();
  this.defenseursCentralDroit=new JoueurComponent();
  this.milieuCentral=new JoueurComponent();
  this.milieuDroit=new JoueurComponent();
  this.milieuGauche=new JoueurComponent();
  this.attaquantsPointe=new JoueurComponent();
  this.attaquantsDroit=new JoueurComponent();
  this.attaquantsGauche=new JoueurComponent();
  }

  getGardien(): JoueurComponent {
    return this.gardien;
  }

  getDefenseurGauche(): JoueurComponent {
    return this.defenseurGauche;
  }

  getDefenseurCentralGauche(): JoueurComponent {
    return this.defenseursCentralGauche;
  }

  getDefenseurCentralDroit(): JoueurComponent {
    return this.defenseursCentralDroit;
  }

  getDefenseurDroit(): JoueurComponent {
    return this.defenseurDroit;
  }

  getMilieuCentral(): JoueurComponent {
    return this.milieuCentral;
  }

  getMilieuDroit(): JoueurComponent {
    return this.milieuDroit;
  }

  getMilieuGauche(): JoueurComponent {
    return this.milieuGauche;
  }

  getAttaquantsPointe(): JoueurComponent {
    return this.attaquantsPointe;
  }

  getAttaquantsDroit(): JoueurComponent {
    return this.attaquantsDroit;
  }

  getAttaquantsGauche(): JoueurComponent {
    return this.attaquantsGauche;
  }

  // Setters

  setGardien(gardien: JoueurComponent): void {
    this.gardien = gardien;
  }

  setDefenseurGauche(defenseurGauche: JoueurComponent): void {
    this.defenseurGauche = defenseurGauche;
  }

  setDefenseurCentralGauche(defenseurCentral: JoueurComponent): void {
    this.defenseursCentralGauche = defenseurCentral;
  }
  setDefenseurCentralDroit(defenseurCentral: JoueurComponent): void {
    this.defenseursCentralDroit = defenseurCentral;
  }


  setDefenseurDroit(defenseurDroit: JoueurComponent): void {
    this.defenseurDroit = defenseurDroit;
  }

  setMilieuCentral(milieuCentral: JoueurComponent): void {
    this.milieuCentral = milieuCentral;
  }

  setMilieuDroit(milieuDroit: JoueurComponent): void {
    this.milieuDroit = milieuDroit;
  }

  setMilieuGauche(milieuGauche: JoueurComponent): void {
    this.milieuGauche = milieuGauche;
  }

  setAttaquantsPointe(attaquantsPointe: JoueurComponent): void {
    this.attaquantsPointe = attaquantsPointe;
  }

  setAttaquantsDroit(attaquantsDroit: JoueurComponent): void {
    this.attaquantsDroit = attaquantsDroit;
  }

  setAttaquantsGauche(attaquantsGauche: JoueurComponent): void {
    this.attaquantsGauche = attaquantsGauche;
  }



}
