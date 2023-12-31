import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Screen01Page } from './screen01.page';
import { Screen01RoutingModule } from './screen01-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ToastService } from '../services/toast.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Screen01RoutingModule
  ],
  declarations: [Screen01Page],
  providers: [ApiService, ToastService]
})
export class Screen01Module { }
