import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { TWeatherResponse } from '../types.d/TWeatherResponse.type';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-screen02',
  templateUrl: './screen02.page.html',
  styleUrls: ['./screen02.page.scss'],
})
export class Screen02Page  implements OnInit {

  city: string = '';
  units: string = '';
  cityData: TWeatherResponse | null = null;
  icon: string = '';
  temp: number = 0.0;
  dateNow: string = '';

  constructor(
    private readonly _router: Router,
  ) {
    if(
      this._router.getCurrentNavigation()?.extras?.state?.hasOwnProperty('city') &&
      this._router.getCurrentNavigation()?.extras?.state?.hasOwnProperty('units') &&
      this._router.getCurrentNavigation()?.extras?.state?.hasOwnProperty('data')
    ) {
      const {city, units, data } = this._router.getCurrentNavigation()?.extras?.state!;
      this.city = city;
      this.units = units;
      this.cityData = data;
      console.log(JSON.stringify(this.cityData, null, 4));
      this.icon = `${environment.ICON_BASE_URL}${this.cityData?.list[0]?.weather[0]?.icon}@2x.png`;
      this.temp = Math.round(this.cityData?.list[0]?.main.temp || 0.0);
      console.log(navigator.languages)
      this.dateNow = new Date(Date.now()).toLocaleDateString('pt-BR' || navigator.language, {
        weekday : 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    }
  }

  ngOnInit() {
  }

}
