import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';
import { environment } from '../../environments/environment';


@Injectable()
export class ToastService {

  public _toast: HTMLIonToastElement | null = null;

  constructor(private readonly toastService: ToastController) {}

  async showMessage(
    message: string,
    code: number,
    position?: 'top' | 'middle' | 'bottom',
    color?: ToastOptions['color']
  ): Promise<void> {
    if (!this._toast === null) {
      this._toast = null;
    }

    const options: ToastOptions = {
      message,
      id: code.toString(),
      duration: environment.TOAST_DURATION,
      position: position ?? 'top',
      cssClass: 'custom-toast',
    };

    if (color) {
      options.color = color;
    }

    this._toast = await this.toastService.create(options);

    await this._toast.present();
  }
}
