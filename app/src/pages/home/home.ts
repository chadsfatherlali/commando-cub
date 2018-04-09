import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	signUpPage = SignUpPage;

  constructor(public navCtrl: NavController) {

  }

}
