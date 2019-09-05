import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomescreenPage } from './homescreen.page';
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  {
    path: '',
    component: HomescreenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomescreenPage, MenuComponent]
})
export class HomescreenPageModule { }
