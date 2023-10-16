import { RouterModule, Routes } from "@angular/router";
import { OfflinePage } from "./offline.page";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
   path: '',
   component: OfflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfflinePageRoutingModule {}

