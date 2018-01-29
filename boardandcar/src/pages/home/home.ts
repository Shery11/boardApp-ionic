import { Component } from '@angular/core';
import { NavController, PopoverController,NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {DetailmenuPage} from '../detailmenu/detailmenu';
import { PopoverPage } from './popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  detailmenuPage = DetailmenuPage;
  public sport;

  constructor(public navCtrl: NavController, public translateService: TranslateService, public popoverCtrl: PopoverController,public navParams: NavParams) {

    this.sport = navParams.get('param');

    console.log(this.sport);

   }

  itemTapped(event, param) {
    this.navCtrl.push(DetailmenuPage, {
      param: param,
      sport : this.sport
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
