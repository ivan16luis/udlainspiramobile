import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { timer } from "rxjs";

@Component({
  selector: 'app-sucssescareers',
  templateUrl: './sucssescareers.page.html',
  styleUrls: ['./sucssescareers.page.scss'],
})
export class SucssescareersPage implements OnInit {

  constructor(
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit() {
    let ok = timer(5000);
    ok.subscribe(()=>{
      this._router.navigate(['/homescreen']);
    },err=>console.log(err));
  }

  goBack() {
    //this._location.back();
  }

}
