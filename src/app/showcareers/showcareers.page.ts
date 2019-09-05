import { Component, OnInit } from '@angular/core';
import { CareerService } from "../providers/career.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SharedService } from "../providers/shared.service";

@Component({
  selector: 'app-showcareers',
  templateUrl: './showcareers.page.html',
  styleUrls: ['./showcareers.page.scss'],
})
export class ShowcareersPage implements OnInit {

  careers: any[];
  selectedList: any[];

  constructor(
    private _careerService: CareerService,
    private _Router: Router,
    private _location: Location,
    private _sharedService:SharedService
  ) {
    this.careers = new Array();
    this.selectedList = new Array();
    this._careerService.getCareers().subscribe(c => {
      if (c.data) {
        this.careers = c.data.reverse();
      }
    }, err => console.log(err));
  }

  ngOnInit() {

  }

  goBack() {
    this._location.back();
  }

  opencard(obj: any, index: any, type: any) {
    if (typeof obj._id != 'undefined' && typeof index != 'undefined') {
      if (type != null && typeof type != 'undefined') {
        switch (type) {
          case 'ls':

            break;
          case 'ws':
            this._sharedService.setCarrerTips(obj);
            this._Router.navigate(['/selectedcareer']);
            break;

          default:
            break;
        }
      }
    }
  }

}
