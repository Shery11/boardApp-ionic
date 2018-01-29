import { Component } from '@angular/core';
import { NavController, PopoverController,IonicPage } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';
import {DetailmenuPage} from '../detailmenu/detailmenu';
import {HomePage} from '../home/home';
import { SandboardPage } from '../sandboard/sandboard';
import { SnowboardPage } from '../snowboard/snowboard';
import { WindsurfPage } from '../windsurf/windsurf';
import { PopoverPage } from './popover';

@IonicPage()
@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html',
})
export class SportsPage {

  constructor(public navCtrl: NavController, public translateService: TranslateService, public popoverCtrl: PopoverController) {
  }

 itemTapped(event, param) {

     switch(param){
        case 'SURF': { 
          this.navCtrl.push(HomePage, {
            param: param
          });
          break; 
       }
       case 'WINDSURF': { 
         this.navCtrl.push(WindsurfPage, {
            param: param
          });
         break; 
       }
        case 'SNOWBOARD': { 
          this.navCtrl.push(SnowboardPage, {
            param: param
          });
          break; 
        }
        case 'SANDBOARD': { 
          this.navCtrl.push(SandboardPage, {
            param: param
          });
          break; 
        }
       
      }

    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
