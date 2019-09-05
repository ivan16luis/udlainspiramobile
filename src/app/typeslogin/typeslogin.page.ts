import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-typeslogin',
  templateUrl: './typeslogin.page.html',
  styleUrls: ['./typeslogin.page.scss'],
})
export class TypesloginPage implements OnInit {

  userForm: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    public _toastController: ToastController,
    private authService: AuthService
  ) {
    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  loginGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  avanza() {
    if (this.userForm.valid) {
      console.log('btn_avanza');
      this._router.navigate(['/registerscreen']);
    } else {
      this.presentToast('Email y/o password incorrectos.');
    }
  }

  presentToast(_message: any) {
    let toast = this._toastController.create({
      message: _message,
      duration: 2000
    });
    toast.then((value) => {
      value.present();
    }).catch(err => console.log(err));
  }


}
