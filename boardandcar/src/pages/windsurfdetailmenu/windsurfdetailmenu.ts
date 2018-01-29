import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {MapsPage} from '../maps/maps';

/**
 * Generated class for the WindsurfdetailmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-windsurfdetailmenu',
  templateUrl: 'windsurfdetailmenu.html',
})
export class WindsurfdetailmenuPage {

  public param;
  public spot;
  public sport;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.spot = navParams.get("param");
    this.sport = navParams.get("sport");
    console.log(this.spot);
    console.log(this.sport);
  }


  itemTapped(event, param) {
    if(param == 'route'){
      this.navCtrl.push(MapsPage, {
        param: param,
        spot:this.spot
      });
    }else{
      this.navCtrl.push(DetailPage, {
        param: param,
        spot:this.spot
      });
    }

    
  }

}
