import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {SnowboarddetailmenuPage} from '../snowboarddetailmenu/snowboarddetailmenu';


@IonicPage()
@Component({
  selector: 'page-snowboard',
  templateUrl: 'snowboard.html',
})
export class SnowboardPage {

  snowboarddetailmenuPage = SnowboarddetailmenuPage;
  public sport;

  constructor(public navCtrl: NavController, public translateService: TranslateService,public navParams: NavParams) {

    this.sport = navParams.get('param');

    console.log(this.sport);

   }

  itemTapped(event, param) {
    this.navCtrl.push(SnowboarddetailmenuPage, {
      param: param,
      sport : this.sport
    });
  }

 

}
