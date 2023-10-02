import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SplashScreenPage } from './splash.page';

import { SplashScreenRoutingModule } from './splash-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenRoutingModule
  ],
  declarations: [SplashScreenPage]
})
export class SplashScreenPageModule {}
