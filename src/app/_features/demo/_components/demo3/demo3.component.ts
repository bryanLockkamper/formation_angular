import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maChaine: string;
  monNombre: number;
  maDate: Date;
  constructor() { }

  ngOnInit() {
    this.maChaine = 'HellO WOrLd';
    this.monNombre = 2.718;
    this.maDate = new Date();
  }

}
