import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  hero =  {
    name: '',
    power: 0,
    image: ''
  }

  ajout(){
    this._shared.heros.push ( this.hero );
    this.hero = {
      name: '',
      power: 0,
      image: ''
    }
  }

  constructor(public _shared: SharedService){}

}
