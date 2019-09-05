import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SharedService } from "../providers/shared.service";

@Component({
  selector: 'app-selectedcareer',
  templateUrl: './selectedcareer.page.html',
  styleUrls: ['./selectedcareer.page.scss'],
})
export class SelectedcareerPage implements OnInit, OnDestroy {

  career: any;
  tips: any[];

  constructor(
    private _router: Router,
    private _location: Location,
    private _sharedService: SharedService
  ) {
    this.init();
  }

  init(){
    this.career = new Object();
    this.tips = new Array();
  }

  ngOnInit() {
    this._sharedService.getCareerTips().subscribe(data => {
      if (data != null && typeof data != 'undefined' && data != '') {
        this.career = JSON.parse(data);
        this._sharedService.clearServiceTipsCareer();
        console.log(this.career);
        if (this.career.tips != null && typeof this.career.tips != 'undefined' && this.career.tips.length > 0) {
          this.tips = this.career.tips;
          console.log(this.tips.length);
        }
      }
    }, err => console.log(err));
  }

  goBack() {
    this._location.back();
  }

  opencard(obj: any) {
    if(obj._id){
      this._sharedService.setTipCards(obj);
      this._router.navigate(['/showtips']);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.init();
    this._sharedService.clearServiceTipsCareer();
  }

}
