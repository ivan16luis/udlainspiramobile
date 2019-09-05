import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SucssescareersPage } from './sucssescareers.page';

const routes: Routes = [
  {
    path: '',
    component: SucssescareersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SucssescareersPage]
})
export class SucssescareersPageModule {}
