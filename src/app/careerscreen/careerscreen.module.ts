import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CareerscreenPage } from './careerscreen.page';

const routes: Routes = [
  {
    path: '',
    component: CareerscreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CareerscreenPage]
})
export class CareerscreenPageModule {}
