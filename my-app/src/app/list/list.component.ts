import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
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
