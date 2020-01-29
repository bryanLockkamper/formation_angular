import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Meteo } from '../_models/meteo';

@Injectable({ providedIn: 'root' })
export class MeteoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getMeteoByCityName(name:string): Observable<Meteo> {
    return this.httpClient.get<Meteo>(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=${environment.owmApiKey}`
    );
  }
}
