import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OfflinePage } from './offline.page';
import { OfflinePageRoutingModule } from './offline-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    OfflinePageRoutingModule
  ],
  declarations: [OfflinePage]
})
export class OfflineModule { }
