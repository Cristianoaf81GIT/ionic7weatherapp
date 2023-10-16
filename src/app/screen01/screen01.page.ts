import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TUnit } from '../types.d/TUnit';
import { ApiService } from '../services/api.service';
import { Config } from '@ionic/angular';
import { WEATHER_DATA } from '../constants';

@Component({
  selector: 'app-screen01',
  templateUrl: 'screen01.page.html',
  styleUrls: ['screen01.page.scss'],
})
export class Screen01Page  implements OnInit, OnDestroy {

  city: string = '';
  unity: TUnit = 'metric';
  error: string = '';
  private _timer: any = null;
  style: string = '';

  constructor(
    private readonly _router: Router,
    private readonly _apiService: ApiService,
    private readonly _config: Config
  ) {
    this.style = this._config.get('mode');
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  onCityNameInput(event: Event): void {
    const cityName = (event.target as HTMLInputElement).value;
    this.city = cityName.toLowerCase();
  }

  onUnitChange(event: Event): void {
    const unityValue = (event.target as HTMLInputElement).value;
    this.unity = <TUnit>unityValue;
  }

  submitData(): void {
    if (!this.unity || !this.city || <string>this.unity === '' || this.city === '') {
      this.error = 'Por favor digite um nome de cidade válido!';
      this._timer = setTimeout(() => {
        this.error = '';
      }, 5000);
      return void(0);
    }
    // TODO - validar dados do form
    // 1 - checar se o valor de cidade esta vazio [ok]
    //  1.1 se o valor estiver vazio setar a variavel texto e mostrar na ui [ok]
    //  1.2 se o valor estiver ok prosseguir para o passo 2 [ok]
    // 2 - fazer a chamada de api para openweather [ok]
    //  2.1 - se houver erros tratá-los [ok]
    //  2.1 - criar methodo de tratamento de erros no servico de api [ok]
    // 3 - armazena os dados de resposta da requisição em local storage [ok]
    //  3.1 - criar no evento on destroy do componente principal da aplicação [ok]
    //  um metodo para limpar os dados de localstorage caso existam dados remanescentes [ok]
    //  4 - criar o componente de exibição de dados em tela [em andamento]
    //    4.1 no componente de exibição criar um metodo para limpar o local storage
    this._apiService.get(this.city,this.unity).subscribe({
      next: (response) => {
         this._router.navigateByUrl('/screen02', {state: {
          city: this.city,
          units: this.unity,
          data: response
        }});
      },
      error: (error) => this._apiService.apiExceptionHandler(error),
    });

  }
}
