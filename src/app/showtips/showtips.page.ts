import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { SharedService } from "../providers/shared.service";

@Component({
  selector: 'app-showtips',
  templateUrl: './showtips.page.html',
  styleUrls: ['./showtips.page.scss'],
})
export class ShowtipsPage implements OnInit, OnDestroy {

  tip: any;
  cards: any[];
  urls: any[];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private _router: Router,
    private _location: Location,
    private _sharedService: SharedService
  ) {
    this.init();
  }

  init(){
    this.tip = new Object();
    this.cards = new Array();
    this.urls = new Array();
  }

  ngOnInit() {
    this._sharedService.getTipCards().subscribe(data => {
      if (data != null && typeof data != 'undefined' && data != '') {
        //console.log(data);
        this.tip = JSON.parse(data);
        this._sharedService.clearServiceCardsTip();
        if (this.tip.cards != null && typeof this.tip.cards != 'undefined' && this.tip.cards.length > 0) {
          this.cards = this.tip.cards;
          console.log(this.cards);
        }
      }
    }, err => console.log(err));
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.init();
    this._sharedService.clearServiceCardsTip();
  }

  changeEvent(event:any){
    console.log(event);
  }

}
