import { Component, OnInit, Input } from '@angular/core';
import { MeteoService } from '../../../_services/meteo.service';
import { HttpClient } from '@angular/common/http/http';
import { Meteo } from '../../../_models/meteo';

@Component({
  selector: 'app-toto',
  templateUrl: './ex4-child.component.html',
  styleUrls: ['./ex4-child.component.scss']
})
export class Ex4ChildComponent implements OnInit {

  context: Meteo;
  @Input() set selectedCity(city :string){
    //connction api et affichage des données
    if (city){
      this.meteoS.getMeteoByCityName(city)
      .subscribe(data => this.context = data);
    }
  }

  constructor(
    private meteoS: MeteoService
  ) { 

  }

  ngOnInit() {
  }

}
