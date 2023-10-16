import { RouterModule, Routes } from "@angular/router";
import { Screen02Page } from "./screen02.page";
import { NgModule } from "@angular/core";


const routes: Routes = [{
  path: '',
  component: Screen02Page
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Screen02RoutingModule {}
