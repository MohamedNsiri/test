import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})

export class FirstComponent {

  user = {
    name: "John Joe",
    age: 69,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
  }

  myname = '';

  change(){
    this.user.name = this.myname;
  }

}
