import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'splashscreen', loadChildren: './splashscreen/splashscreen.module#SplashscreenPageModule' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'typeslogin', loadChildren: './typeslogin/typeslogin.module#TypesloginPageModule' },
  { path: 'homescreen', loadChildren: './homescreen/homescreen.module#HomescreenPageModule' },
  { path: 'registerscreen', loadChildren: './registerscreen/registerscreen.module#RegisterscreenPageModule' },
  { path: 'qrscannerscreen', loadChildren: './qrscannerscreen/qrscannerscreen.module#QrscannerscreenPageModule' },
  { path: 'careerscreen', loadChildren: './careerscreen/careerscreen.module#CareerscreenPageModule' },
  { path: 'confirmcareers', loadChildren: './confirmcareers/confirmcareers.module#ConfirmcareersPageModule' },
  { path: 'sucssescareers', loadChildren: './sucssescareers/sucssescareers.module#SucssescareersPageModule' },
  { path: 'showcareers', loadChildren: './showcareers/showcareers.module#ShowcareersPageModule' },
  { path: 'showtips', loadChildren: './showtips/showtips.module#ShowtipsPageModule' },
  { path: 'knowcareers', loadChildren: './knowcareers/knowcareers.module#KnowcareersPageModule' },
  { path: 'selectedcareer', loadChildren: './selectedcareer/selectedcareer.module#SelectedcareerPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
