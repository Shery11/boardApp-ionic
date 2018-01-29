import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import { WindsurfdetailmenuPage } from '../windsurfdetailmenu/windsurfdetailmenu';



@IonicPage()
@Component({
  selector: 'page-windsurf',
  templateUrl: 'windsurf.html',
})
export class WindsurfPage {

  windsurfdetailmenuPage = WindsurfdetailmenuPage;
  public sport;

  constructor(public navCtrl: NavController, public translateService: TranslateService,public navParams: NavParams) {

    this.sport = navParams.get('param');

    console.log(this.sport);

   }

  itemTapped(event, param) {
    this.navCtrl.push(WindsurfdetailmenuPage, {
      param: param,
      sport : this.sport
    });
  }

 

}
