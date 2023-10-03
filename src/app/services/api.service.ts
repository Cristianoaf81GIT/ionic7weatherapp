import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IApiWeatherService } from '../types.d/IApiWeatherService.interface';
import { TWeatherResponse } from '../types.d/TWeatherResponse.type';
import { environment } from '../../environments/environment';
import { WEATHER_REQ_PARAMS, WEATHER_DATA } from '../constants';

@Injectable()
export class ApiService implements IApiWeatherService {

  private readonly _key = environment.WHEATHER_API_KEY;
  private readonly _url = environment.API_URL;
  public weatherLocationData: TWeatherResponse | null = null;

  constructor(private readonly _httpService: HttpClient) { }

  get(city: string, units: 'metric' | 'imperial'): void {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const httpParams: HttpParams = new HttpParams();
    httpParams.set(WEATHER_REQ_PARAMS.CITY, city);
    httpParams.set(WEATHER_REQ_PARAMS.APPID, this._key);
    httpParams.set(WEATHER_REQ_PARAMS.UNITS, units);
    httpParams.set(WEATHER_REQ_PARAMS.TZ, timeZone);

    this._httpService.get<TWeatherResponse>(this._url, {
      params: httpParams
    }).subscribe({
      next: (response) => {
        console.log(`responsta da requisição: ${JSON.stringify(response, null, 4)}`);
        this.weatherLocationData = response;
        localStorage.setItem(WEATHER_DATA, JSON.stringify(response));
      },
      error: (error) => {
        console.log(`erro da requisição: ${JSON.stringify(error, null, 4)}`);
      }
    });
  }
}
