import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrscannerscreenPage } from './qrscannerscreen.page';

const routes: Routes = [
  {
    path: '',
    component: QrscannerscreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrscannerscreenPage]
})
export class QrscannerscreenPageModule {}
