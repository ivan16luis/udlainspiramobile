import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private _router:Router
  ) {
  }

  ngOnInit() { }

  top() {
    console.log('top');
    this._router.navigate(['/careerscreen']);
  }

  left() {
    console.log('left');
    this._router.navigate(['/showcareers']);
  }

  right() {
    console.log('right');
  }

  botton() {
    console.log('botton');
  }

}
