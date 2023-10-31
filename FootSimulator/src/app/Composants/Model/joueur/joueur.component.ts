import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.scss']
})
export class JoueurComponent {
  nom: string ="";
  age: number =0;
  club: string ="";
  nation: string ="";
  id:number=0;
  position:string ="";
  precision:string="none";


  constructor() {
  }

   setNom(value: string) {
    this.nom = value;
  }

    setPrecision(value: string) {
        this.precision = value;
    }

    setId(value: number) {
        this.id = value;
    }

    setPosition(value: string) {
        this.position = value;
    }

  // Setter pour l'attribut "age"
   setAge(value: number) {
    this.age = value;
  }

  // Setter pour l'attribut "club"
   setClub(value: string) {
    this.club = value;
  }

  // Setter pour l'attribut "nation"
   setNation(value: string) {
    this.nation = value;
  }


  getNom():string{
    return this.nom
  }

    getId():number{
        return this.id
    }

    getPrecision():string {
        return this.precision;
    }

    getPosition():string{
        return <string>this.position
    }

  getAge():number{
    return this.age
  }

  getClub():string{
    return this.club
  }

  getNation():string{
    return this.nation
  }

}
