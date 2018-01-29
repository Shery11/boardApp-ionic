import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { SportsPage } from '../pages/sports/sports';
import { Globalization } from '@ionic-native/globalization';
//declare var google;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SportsPage;
  //rootPage:any = MapsPage;

  constructor(platform: Platform, translate: TranslateService, private globalization: Globalization, statusBar: StatusBar, splashScreen: SplashScreen) { 
    translate.setDefaultLang('en');
    platform.ready().then(() => {
      if ((<any>window).cordova) {
        this.globalization.getPreferredLanguage().then(result => {
          var language = (this.getSuitableLanguage(result.value) == 'fr')?'fr':'en';
          translate.use(language);
        });
      } else {
        translate.use('en');
      }
    }
  );
  //alert(this.globalization.getPreferredLanguage().then(res => console.log(res)).catch(e => console.log(e)));

    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  getSuitableLanguage(language) {
		language = language.substring(0, 2).toLowerCase();
		return  language;
	}
  
}
