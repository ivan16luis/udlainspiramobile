import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { TipService } from "./tip.service";
import { CardService } from "./card.service";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedCareers = new BehaviorSubject('');
  private tipsCareer = new BehaviorSubject('');
  private cardsTip = new BehaviorSubject('');

  constructor(
    private _tipService: TipService,
    private _cardService: CardService
  ) { }

  setCareers(careers: any[]) {
    this.selectedCareers.next(JSON.stringify(careers));
  }

  getCareers(): Observable<any> {
    return this.selectedCareers.asObservable();
  }

  setCarrerTips(career: any) {
    if (career._id) {
      this._tipService.findTipsByCareer(career._id).subscribe(tips => {
        if (tips.data) {
          career.tips = tips.data;
          this.tipsCareer.next(JSON.stringify(career));
        }
      }, err => console.log(err));
    }
  }

  getCareerTips(): Observable<any> {
    return this.tipsCareer.asObservable();
  }

  setTipCards(tip: any) {
    if (tip._id) {
      this._cardService.findCardsByTip(tip._id).subscribe(data => {
        if (data.cards) {
          tip.cards = data.cards;
          this.cardsTip.next(JSON.stringify(tip));
        }
      }, err => console.log(err));
    }
  }

  getTipCards(): Observable<any> {
    return this.cardsTip.asObservable();
  }


  clearServiceTipsCareer() {
    this.tipsCareer = new BehaviorSubject('');
  }

  clearServiceCardsTip() {
    this.cardsTip = new BehaviorSubject('');
  }

}
