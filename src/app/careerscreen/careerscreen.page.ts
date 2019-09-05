import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { CareerService } from "../providers/career.service";
import { SharedService } from "../providers/shared.service";

@Component({
  selector: 'app-careerscreen',
  templateUrl: './careerscreen.page.html',
  styleUrls: ['./careerscreen.page.scss'],
})
export class CareerscreenPage implements OnInit {

  careers: any[];
  selectedList: any[];

  constructor(
    private _location: Location,
    private _router: Router,
    private _careerService: CareerService,
    private _sharedService: SharedService
  ) {
    this.careers = new Array();
    this.selectedList = new Array();
    this._careerService.getCareers().subscribe(c => {
      if (c.data) {
        this.careers = c.data;
      }
    }, err => console.log(err));
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  opencard(obj: any, index: any) {
    if (typeof obj._id != 'undefined' && typeof index != 'undefined') {
      if (typeof this.careers[index].selected == 'undefined') {
        if (this.selectedList.length < 3) {
          this.careers[index].selected = true;
        }
      } else {
        let temp = this.careers[index].selected;
        if (this.selectedList.length < 3) {
          this.careers[index].selected = !temp;
        } else if (temp && this.selectedList.length == 3) {
          this.careers[index].selected = !temp;
        }
      }
      this.checkList();
    }
  }


  checkList() {
    if (this.careers.length > 0) {
      let count: any = 0;
      this.selectedList = new Array();
      for (let i = 0; i < this.careers.length; i++) {
        if (this.careers[i].selected) {
          this.selectedList.push(this.careers[i]);
          count++;
          if (count == 3) {
            console.log(this.selectedList);
            this._sharedService.setCareers(this.selectedList);
            this._router.navigate(['/confirmcareers']);
            break;
          }
        }
      }
    }
  }

  

}
