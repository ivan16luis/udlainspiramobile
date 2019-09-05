import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TipService {

  private api: any = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  findTipsByCareer(_id: any): Observable<any> {
    return this.http.post(this.api + 'tip/find/career', { id: _id });
  }
}
