import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage {
	private signUpWithUpEmailPassword_form : FormGroup
	private errorSignup : any = null
	private userCredentials : any = {
		email: null,
		password: null
	}

  constructor(
  	public navCtrl: NavController,
  	private afAuth: AngularFireAuth,
  	private formBuilder: FormBuilder,
  	private translate: TranslateService 
  ) {
  	this.translate.setDefaultLang('es')
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

  private singUpWithGoogle () {
  	this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  	.then(res => {
  		console.log(res)
  	})
  	.catch(err => {
  		console.log(err)
  	})
  }

  private signUpWithFacebook () {
  	this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  	.then(res => {
  		console.log(res)
  	})
  	.catch(err => {
  		console.log(err)
  	})
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