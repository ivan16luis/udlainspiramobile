import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  getUser():any{
    return JSON.parse(localStorage.getItem('user'));
  }

  setCareers(careers:any[]){
    localStorage.setItem('careers',JSON.stringify(careers));
  }

  getCareers():any[]{
    return JSON.parse(localStorage.getItem('careers'));
  }

}
