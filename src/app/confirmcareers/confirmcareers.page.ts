import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { SharedService } from "../providers/shared.service";

@Component({
  selector: 'app-confirmcareers',
  templateUrl: './confirmcareers.page.html',
  styleUrls: ['./confirmcareers.page.scss'],
})
export class ConfirmcareersPage implements OnInit {

  careers_selected: any[];

  constructor(
    private _location: Location,
    private _router: Router,
    private _sharedService: SharedService
  ) {
    this.careers_selected = new Array();
    this._sharedService.getCareers().subscribe(data => {
      if (data != null && typeof data != 'undefined' && data != '') {
        this.careers_selected = JSON.parse(data);
        console.log(this.careers_selected);
      }
    }, err => console.log(err));
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  confirmar() {
    if (this.careers_selected.length > 0 && this.careers_selected.length == 3) {
      this._router.navigate(['/sucssescareers']);
    }
  }

}
