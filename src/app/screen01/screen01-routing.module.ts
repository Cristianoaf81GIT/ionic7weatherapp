import { RouterModule, Routes } from "@angular/router";
import { Screen01Page } from "./screen01.page";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {
   path: '',
   component: Screen01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen01RoutingModule {}
