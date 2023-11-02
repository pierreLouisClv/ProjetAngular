import { Injectable } from '@angular/core';
import {EquipeComponent} from "../../Composants/Model/equipe/equipe.component";

@Injectable({
  providedIn: 'root'
})
export class EquipeBuilderService {
  public equipe: EquipeComponent;

  constructor() {
    this.equipe = new EquipeComponent();
  }

  getEquipe(): EquipeComponent {
    return this.equipe

  }
}
