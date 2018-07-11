import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignUpPage } from '../signup/signup';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private signUpPage = SignUpPage
	public items: Observable<any[]>

  constructor(
  	public navCtrl: NavController,
  	private translate: TranslateService,
  	private db: AngularFirestore
  ) {
  	this.translate.setDefaultLang('es')
  	this.items = db.collection('people').valueChanges()

  	setTimeout(() => {
  		console.log('== DEV ==', this.items)
  	}, 5000)
  }
}
