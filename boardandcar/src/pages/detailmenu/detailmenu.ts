import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {MapsPage} from '../maps/maps';

@Component({
  selector: 'page-detailmenu',
  templateUrl: 'detailmenu.html'
})
export class DetailmenuPage {

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
