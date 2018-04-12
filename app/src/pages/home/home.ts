import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private signUpPage = SignUpPage

  constructor(
  	public navCtrl: NavController,
  	private translate: TranslateService
  ) {
  	this.translate.setDefaultLang('es')
  }
}
