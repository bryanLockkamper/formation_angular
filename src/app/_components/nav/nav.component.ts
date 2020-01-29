import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  machin: NbMenuItem[];

  constructor() { }

  ngOnInit() {
    this.machin = [
      { title: 'Home', link: '/home', icon: 'home' },
      { title: 'About', link: '/about', icon: 'heart' },
      { title: 'Demo', icon: 'sun', children: [
        { title: 'Demo 1 - Binding one way', link: '/demo/demo1' },
        { title: 'Demo 2 - Event', link: '/demo/demo2' },
        { title: 'Demo 3 - Pipes', link: '/demo/demo3' },
        { title: 'Demo 4 - *ngIf', link: '/demo/demo4' },
        { title: 'Demo 5 - *ngFor', link: '/demo/demo5' },
        { title: 'Demo 6 - Binding 2 Ways', link: '/demo/demo6' },
        { title: 'Demo 7 - @Input - @Output', link: '/demo/demo7' },
        { title: 'Demo 8 - Reactive Form', link: '/demo/demo8' },
        { title: 'Demo 9 - Chat', link: '/demo/demo9' },
      ] },
      { title: 'Exercices', icon: 'moon', children: [
        { title: 'Ex 1 - Chrono', link: '/ex/ex1' },
        { title: 'Ex 2 - Shopping List', link: '/ex/ex2' },
        { title: 'Ex 3 - Pokedex', link: '/ex/ex3' },
        { title: 'Ex 4 - Meteo', link: '/ex/ex4' },
      ] }
    ];
  }

}
