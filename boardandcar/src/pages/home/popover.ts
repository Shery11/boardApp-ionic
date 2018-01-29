import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  template: `
    <ion-list>
      <ion-list-header style="color: #297db7; ">Menu</ion-list-header>
      <button ion-item (click)="contactTapped($event, '')">{{ 'SERVICES' | translate }}</button>
      <button ion-item (click)="aboutTapped($event, '')">{{ 'ABOUT' | translate }}</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  aboutTapped(event, param) {
    this.navCtrl.push(AboutPage, {
      param: param
    });
  }
  contactTapped(event, param) {
    this.navCtrl.push(ContactPage, {
      param: param
    });
  }
}

