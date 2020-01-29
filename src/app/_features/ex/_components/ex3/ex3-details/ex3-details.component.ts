import { Component, OnInit, Input } from '@angular/core';
import { RadialChartOptions } from 'chart.js';
import { PokemonService } from '../../../_services/pokemon.service';
import { PokemonDetails } from '../../../_models/pokemon-details';

@Component({
  selector: 'app-ex3-details',
  templateUrl: './ex3-details.component.html',
  styleUrls: ['./ex3-details.component.scss']
})
export class Ex3DetailsComponent implements OnInit {

  context: PokemonDetails;
  _selectedUrl: string;
  @Input() set selectedUrl(url:string) {
    this._selectedUrl = url;
    if(url != null) {
      // appeler l'api sur cette url + maj context
      this.pokeService.get(url)
        .subscribe(data => this.context = data);
    }
  }
  
  constructor(
    private pokeService: PokemonService
  ) { }

  ngOnInit() {
  }

}
