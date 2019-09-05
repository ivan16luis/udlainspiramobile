import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private api: any = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCareers(): Observable<any> {
    return this.http.post(this.api + 'career/all', {});
  }



}
