import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonsRequest } from '../_models/pokemons-request';
import { Observable } from 'rxjs';
import { PokemonDetails } from '../_models/pokemon-details';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(limit:number, offset:number): Observable<PokemonsRequest> {
    return this.httpClient
      .get<PokemonsRequest>(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
  }

  get(url: string): Observable<PokemonDetails> {
    return this.httpClient
      .get<PokemonDetails>(url);
  }
}
