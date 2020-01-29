import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.scss']
})
export class Ex4Component implements OnInit {

  cities: string[];
  city: string;
  constructor() { }

  ngOnInit() {
    this.cities = [
      'Namur', 'Tunis', 'Vladivostok'
    ];
  }

  selectCity(chosenCity: string) {
    this.city = chosenCity;
  }

}
