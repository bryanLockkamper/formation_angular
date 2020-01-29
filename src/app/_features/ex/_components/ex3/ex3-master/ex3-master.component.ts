import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../../_services/pokemon.service';
import { PokemonsRequest } from '../../../_models/pokemons-request';

@Component({
  selector: 'app-ex3-master',
  templateUrl: './ex3-master.component.html',
  styleUrls: ['./ex3-master.component.scss']
})
export class Ex3MasterComponent implements OnInit {

  limit: number;
  offset: number;

  context: PokemonsRequest;

  @Output() onPokemonChanged: EventEmitter<string>

  constructor(
    private pokemonService: PokemonService
  ) { 
    this.onPokemonChanged = new EventEmitter<string>();
  }

  ngOnInit() {
    this.limit = 20;
    this.offset = 0;
    this.refresh();
  }

  next() { this.offset+=this.limit;this.refresh(); }

  previous() { this.offset-=this.limit;this.refresh(); }

  private refresh() {
    this.pokemonService.getAll(this.limit, this.offset).subscribe(data => {
      this.context = data;
    });
  }

  limitChanged(e: number) {
    this.limit = e;
    this.refresh();
  }

  select(url: string) {
    this.onPokemonChanged.emit(url);
  }

}
