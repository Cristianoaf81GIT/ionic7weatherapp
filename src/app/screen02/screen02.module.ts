import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen02RoutingModule } from './screen02-routing.module';
import { Screen02Page } from './screen02.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    Screen02RoutingModule,
    HttpClientModule,
    IonicModule
  ],
  declarations: [Screen02Page],
})
export class Screen02Module { }
