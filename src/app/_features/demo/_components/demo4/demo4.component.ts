import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {
  collapsed: boolean;
  constructor() { }

  ngOnInit() {
    this.collapsed = false;
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

}
