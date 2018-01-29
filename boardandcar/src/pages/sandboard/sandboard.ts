import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {SandboarddetailmenuPage} from '../sandboarddetailmenu/sandboarddetailmenu';

@IonicPage()
@Component({
  selector: 'page-sandboard',
  templateUrl: 'sandboard.html',
})
export class SandboardPage {
 sandboarddetailmenuPage = SandboarddetailmenuPage;
  public sport;

  constructor(public navCtrl: NavController, public translateService: TranslateService,public navParams: NavParams) {

    this.sport = navParams.get('param');

    console.log(this.sport);

   }

  itemTapped(event, param) {
    this.navCtrl.push(SandboarddetailmenuPage, {
      param: param,
      sport : this.sport
    });
  }

 

}
