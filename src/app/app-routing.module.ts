import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash.module').then( spsm => spsm.SplashScreenPageModule)
  },
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full'
  },
  {
    path: 'screen01',
    loadChildren: () => import('./screen01/screen01.module').then(sc01m => sc01m.Screen01Module)
  },
  {
    path: 'screen01',
    redirectTo: 'screen01',
    pathMatch: 'full'
  },
  {
    path: 'screen02',
    loadChildren: () => import('./screen02/screen02.module').then(sc02m => sc02m.Screen02Module)
  },
  {
    path: 'offline',
    loadChildren: () => import('./offline/offline.module').then(ofm => ofm.OfflineModule)
  },
  {
    path: 'screen02',
    redirectTo: 'screen02',
    pathMatch: 'full'
  },
  {
    path: 'offline',
    redirectTo: 'offline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
