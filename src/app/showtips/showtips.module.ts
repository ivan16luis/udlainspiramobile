import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SlideshowModule } from 'ng-simple-slideshow';

import { ShowtipsPage } from './showtips.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtipsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SlideshowModule
  ],
  declarations: [ShowtipsPage]
})
export class ShowtipsPageModule {}
