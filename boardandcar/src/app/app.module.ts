import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapsPage } from '../pages/maps/maps';
import { DetailPage } from '../pages/detail/detail';
import { DetailmenuPage } from '../pages/detailmenu/detailmenu';
import { ContactPage } from '../pages/contact/contact';
import { SportsPage } from '../pages/sports/sports';
import { SandboardPage } from '../pages/sandboard/sandboard';
import { SnowboardPage } from '../pages/snowboard/snowboard';
import { WindsurfPage } from '../pages/windsurf/windsurf';
import { SandboarddetailmenuPage } from '../pages/sandboarddetailmenu/sandboarddetailmenu';
import { SnowboarddetailmenuPage } from '../pages/snowboarddetailmenu/snowboarddetailmenu';
import { WindsurfdetailmenuPage } from '../pages/windsurfdetailmenu/windsurfdetailmenu';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/sports/popover';
import { TabsPage } from '../pages/tabs/tabs';
import { Globalization } from '@ionic-native/globalization';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http-provider';
import { HttpClientModule, HttpClient  } from '@angular/common/http'; 

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailPage,
    DetailmenuPage,
    ContactPage,
    HomePage,
    SportsPage,
    SandboardPage,
    SnowboardPage,
    WindsurfPage,
    SandboarddetailmenuPage,
    SnowboarddetailmenuPage,
    WindsurfdetailmenuPage,
    PopoverPage,
    TabsPage,
    MapsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailPage,
    DetailmenuPage,
    ContactPage,
    HomePage,
    SportsPage,
    SandboardPage,
    SnowboardPage,
    WindsurfPage,
    SandboarddetailmenuPage,
    SnowboarddetailmenuPage,
    WindsurfdetailmenuPage,
    PopoverPage,
    TabsPage,
    MapsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    Geolocation,
    InAppBrowser ,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
