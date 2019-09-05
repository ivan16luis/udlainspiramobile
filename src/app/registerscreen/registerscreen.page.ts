import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registerscreen',
  templateUrl: './registerscreen.page.html',
  styleUrls: ['./registerscreen.page.scss'],
})
export class RegisterscreenPage implements OnInit {

  constructor(
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  onchangeDay() {
    console.log('onchange');
  }

  avanza() {
    console.log('btn_avanza');
    this._router.navigate(['/homescreen']);
  }

}
