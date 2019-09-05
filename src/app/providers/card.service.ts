import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private api: any = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  findCardsByTip(_id: any): Observable<any> {
    return this.http.post(this.api + 'card/find/tip', { id: _id });
  }
}
