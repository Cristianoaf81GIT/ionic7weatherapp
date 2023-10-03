import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Screen01Page } from './screen01.page';
import { Screen01RoutingModule } from './screen01-routing.module';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    Screen01RoutingModule
  ],
  providers: [ApiService],
  declarations: [Screen01Page]
})
export class Screen01Module { }
