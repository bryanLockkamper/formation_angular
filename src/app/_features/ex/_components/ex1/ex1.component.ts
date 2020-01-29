import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {

  compteur: number;
  idInterval: any;

  constructor() { }

  ngOnInit() {
    this.compteur = 0;
  }

  stop() {
    clearInterval(this.idInterval);
    this.idInterval = null;
  }
  start() {
    this.idInterval = setInterval(() => {
      this.compteur++;
    }, 1);
  }
  reset() { this.compteur = 0; this.stop(); }

}
