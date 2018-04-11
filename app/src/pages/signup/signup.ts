import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
	private signUpWithUpEmailPassword_form : FormGroup
	private fbProvider : any = new firebase.auth.FacebookAuthProvider()
	private errorSignup : any = null
	private userCredentials : any = {
		email: null,
		password: null
	}

  constructor(
  	public navCtrl: NavController,
  	private afAuth: AngularFireAuth,
  	private formBuilder: FormBuilder
  ) {
  	this.signUpWithUpEmailPassword_form = this.formBuilder.group({
  		email: [
  			'', 
  			[
  				Validators.required, 
  				Validators.email
  			]
  		],
  		password: [
  			'', 
  			[
  				Validators.required, 
  				Validators.minLength(6)
  			]
  		]
  	})
  }

  private signUpWithFacebook () {
  	this.fbProvider.setCustomParameters({
  		'display': 'popup'
  	})

  	this.afAuth.auth.signInWithPopup(this.fbProvider)
  }

  private signUpWithUpEmailPassword () {
  	this.afAuth.auth.createUserWithEmailAndPassword(this.userCredentials.email, this.userCredentials.password)
  	.then(res => {
  		this.userCredentials.email = null
  		this.userCredentials.password = null
  		this.errorSignup = null
  	})
  	.catch(err => {
  		this.errorSignup = err.code
  	})
  }
}