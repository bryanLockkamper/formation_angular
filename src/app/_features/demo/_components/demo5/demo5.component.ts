import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  liste: string[];
  // liste: Array<string>;

  constructor() { }

  ngOnInit() {
    this.liste = ['sel', 'poivre', 'sucre'];
  }

}
