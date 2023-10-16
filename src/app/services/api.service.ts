import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IApiWeatherService } from '../types.d/IApiWeatherService.interface';
import { TWeatherResponse } from '../types.d/TWeatherResponse.type';
import { environment } from '../../environments/environment';
import { WEATHER_REQ_PARAMS } from '../constants';
import { ToastService } from './toast.service';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService implements IApiWeatherService {

  private readonly _key = environment.WHEATHER_API_KEY;
  private readonly _url = environment.API_URL;

  constructor(
    private readonly _httpService: HttpClient,
    private _toastService: ToastService
  ) { }

  get(city: string, units: 'metric' | 'imperial'): Observable<TWeatherResponse> {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return this._httpService.get<TWeatherResponse>(this._url, {
      params: new HttpParams()
        .append(WEATHER_REQ_PARAMS.CITY, city)
        .append(WEATHER_REQ_PARAMS.APPID, this._key)
        .append(WEATHER_REQ_PARAMS.UNITS, units)
        .append(WEATHER_REQ_PARAMS.TZ, timeZone)

    });
  }

  async apiExceptionHandler(error: any): Promise<void> {
    if(!navigator.onLine) {
      this._toastService.showMessage('Oops!, parece que estamos sem conexão', 503);
      return void(0);
    }

    switch(error.status) {
      case 401:
        this._toastService.showMessage(
          'Oops!, tivemos um erro ao acessar o serviço remoto',
          error.status
        );
      break;
      case 404:
        this._toastService.showMessage(
          'Cidade não encontrada!',
          error.status
        );
      break;
      case 429:
        this._toastService.showMessage(
          'O servidor atingiu o limite de requisições',
          error.status
        );
      break;
      case 500:
        this._toastService.showMessage(error.error.message, error.status);
      break;
      case 502:
        this._toastService.showMessage(error.error.message, error.status);
      break;
      case 503:
        this._toastService.showMessage(error.error.message, error.status);
      break;
      case 504:
        this._toastService.showMessage(error.error.message, error.status);
      break;
      default:
      break;
    }
    return void(0);
  }
}
