import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {

  constructor(
  	public navCtrl: NavController,
  	private afAuth: AngularFireAuth
  ) { }

  signUpEmailPassword () {
  	console.log(this.afAuth);
  }
}