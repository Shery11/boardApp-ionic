import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers:[HttpProvider]
})
export class DetailPage {
  
  newsData: any;
  loading: any;
  id: any;
  public param;
  public spot;
  public html;
  public params;
  public houses = [];
  public urls = [];

  @ViewChild('dataContainer') dataContainer: ElementRef;
  
  loadData(data) {
      this.dataContainer.nativeElement.innerHTML = data;
  }

  
  TAGHAZOUT = {activite:3238, spot:3194, maison:3226, route:3540, coach:3210,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257189_54105','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265107_82439','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265197_26682']};
  ESSAOUIRA = {activite:3236, spot:3188, maison:3236, route:3544, coach:3206,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257317_23783','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257383_59402','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257437_46439']};
  IMSOUANE = {activite:3239, spot:3192, maison:3224, route:3553, coach:3212,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360778880_92957','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360779517_98627']};
  AGADIR = {activite:3234, spot:3186, maison:3218, route:3536, coach:3200,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258287_65451','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258373_55233','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258606_72532']};
  IFNI = {activite:3240, spot:3190, maison:3222, route:3548, coach:3208,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257516_73130','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265451_31486','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258056_14934','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258211_69492']};
  ESSAOUIRAA = {activite:3244, spot:3178, maison:3216, route:3557, coach:3198,previsions:['https://wisuki.com/widget-details?spot=3547&lang=en&spotinfo=1']};
  DAKHLA = {activite:3245, spot:3180, maison:3214, route:3561, coach:3296,previsions:['https://wisuki.com/widget-details?spot=3547&lang=en&spotinfo=1']};
  OUKAIMDEN = {activite:3249, maison:3230, route:3573,previsions:['http://www.snow-forecast.com/resorts/Oukaimeden/forecasts/feed/mid/m']};
  MICHLIFEN = {activite:3248, maison:3232, route:3569,previsions:['http://www.snow-forecast.com/resorts/Michlifen/forecasts/feed/mid/m']};
  MERZOUGA = {activite:3252, spot:3184, maison:3228, route:3565,weather:['https://www.meteoblue.com/en/weather/widget/daily/merzouga_morocco_2542443?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=dark','https://www.meteoblue.com/en/weather/widget/seeing/merzouga_morocco_2542443?geoloc=fixed&noground=0']};
  


  // spot = spot
  // route = road
  // coach = lessons
  // maison =  accomodation
  // activite = discover

  // previous english ids
  // TAGHAZOUTEN = {activite:2304, spot:2316, maison:2310, route:2313, coach:2307,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257189_54105','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265107_82439','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265197_26682']};
  // ESSAOUIRAEN = {activite:2265, spot:2262, maison:2256, route:2259, coach:2252,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257317_23783','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257383_59402','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257437_46439']};
  // IMSOUANEEN = {activite:2284, spot:2293, maison:2290, route:2296, coach:2287,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360778880_92957','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360779517_98627']};
  // AGADIREN = {activite:2237, spot:2249, maison:2243, route:2246, coach:2240,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258287_65451','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258373_55233','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258606_72532']};
  // IFNIEN = {activite:2268, spot:2281, maison:2274, route:2277, coach:2271,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257516_73130','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265451_31486','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258056_14934','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258211_69492']};
  // ESSAOUIRAAN = {activite:1917, spot:1848, maison:1920, route:2175, coach:1931};
  // DAKHLAN = {activite:1917, spot:1848, maison:1920, route:2175, coach:1931};
  // OUKAIMDENN = {activite:1917, spot:1848, maison:1920, route:2175, coach:1931};
  // MICHLIFENN = {activite:1917, spot:1848, maison:1920, route:2175, coach:1931};
  // MERZOUGAN = {activite:1917, spot:1848, maison:1920, route:2175, coach:1931};
  // new ids
  TAGHAZOUTEN = {activite:3459, spot:3512, maison:3483, route:3555, coach:3500,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257189_54105','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265107_82439','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265197_26682']};
  ESSAOUIRAEN = {activite:3466, spot:3518, maison:3479, route:3546, coach:3504,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257317_23783','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257383_59402','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257437_46439']};
  IMSOUANEEN = {activite:3462, spot:3514, maison:3851, route:3546, coach:3498,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360778880_92957','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1360779517_98627']};
  AGADIREN = {activite:3468, spot:3540, maison:3477, route:3538, coach:3506,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258287_65451','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258373_55233','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258606_72532']};
  IFNIEN = {activite:3464, spot:3516, maison:3481, route:3551, coach:3502,previsions:['http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506257516_73130','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506265451_31486','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258056_14934','http://magicseaweed.com/syndicate/index.php?action=content&licenseKey=1506258211_69492']};
  ESSAOUIRAAN = {activite:3474, spot:3524, maison:3493, route:3551, coach:3508,previsions:['https://wisuki.com/widget-details?spot=3547&lang=en&spotinfo=1']};
  DAKHLAN = {activite:3472, spot:3522, maison:3495, route:3563, coach:3510,previsions:['https://wisuki.com/widget-details?spot=3547&lang=en&spotinfo=1']};
  OUKAIMDENN = {activite:3530, maison:3488, route:3563,previsions:['http://www.snow-forecast.com/resorts/Oukaimeden/forecasts/feed/mid/m']};
  MICHLIFENN = {activite:3470, maison:3486, route:3571,previsions:['http://www.snow-forecast.com/resorts/Oukaimeden/forecasts/feed/mid/m']};
  MERZOUGAN = {activite:3533, spot:3526, maison:3490, route:3567,weather:['https://www.meteoblue.com/en/weather/widget/daily/merzouga_morocco_2542443?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=dark','https://www.meteoblue.com/en/weather/widget/seeing/merzouga_morocco_2542443?geoloc=fixed&noground=0']};





  constructor(public navCtrl: NavController,public translate: TranslateService, private httpProvider:HttpProvider, public navParams: NavParams,public sanitizer: DomSanitizer) {
    this.param = navParams.get("param");
    this.spot = navParams.get("spot");
    console.log(this.param);
    console.log(this.spot);
    //this.id = null;

    switch(this.spot){
      case 'TAGHAZOUT': { 
        this.id = ( this.translate.currentLang == 'fr')?this.TAGHAZOUT[this.param]:this.TAGHAZOUTEN[this.param];
        break; 
      } 
      case 'ESSAOUIRA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.ESSAOUIRA[this.param]:this.ESSAOUIRAEN[this.param];
        break; 
      } 
      case 'IMSOUANE': { 
        this.id = (this.translate.currentLang  == 'fr')?this.IMSOUANE[this.param]:this.IMSOUANEEN[this.param];
        break; 
      } 
      case 'AGADIR': { 
        this.id = (this.translate.currentLang  == 'fr')?this.AGADIR[this.param]:this.AGADIREN[this.param];
        break; 
      } 
      case 'IFNI': { 
        this.id = (this.translate.currentLang  == 'fr')?this.IFNI[this.param]:this.IFNIEN[this.param];
        break; 
      } 
      case 'ESSAOUIRAA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.ESSAOUIRAA[this.param]:this.ESSAOUIRAAN[this.param];
        break; 
      } 
      case 'DAKHLA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.DAKHLA[this.param]:this.DAKHLAN[this.param];
        break; 
      } 
      case 'OUKAIMDEN': { 
        this.id = (this.translate.currentLang  == 'fr')?this.OUKAIMDEN[this.param]:this.OUKAIMDENN[this.param];
        break; 
      } 
      case 'MICHLIFEN': { 
        this.id = (this.translate.currentLang  == 'fr')?this.MICHLIFEN[this.param]:this.MICHLIFENN[this.param];
        break; 
      } 
      case 'MERZOUGA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.MERZOUGA[this.param]:this.MERZOUGAN[this.param];
        break; 
      } 
    }
    
    console.log(this.id);
    if(this.param == 'previsions' || this.param == 'weather' ){

      if(this.param == 'previsions'){
        if(this.translate.currentLang  == 'fr'){
         this.params = 'Prévisions'
         }else{
           this.params = 'Forecasts'
         }  
        
      }else{
         
         if(this.translate.currentLang  == 'fr'){
         this.params = 'Météo'
         }else{
           this.params = 'Weather'
         }  
       }
      
      switch(this.spot){
        case 'TAGHAZOUT': { 
          this.urls = this.TAGHAZOUT['previsions'];
          break; 
       }
       case 'ESSAOUIRA': { 
         this.urls = this.ESSAOUIRA['previsions'];
         break; 
       }
        case 'IMSOUANE': { 
          this.urls = this.IMSOUANE['previsions'];
          break; 
        }
        case 'AGADIR': { 
          this.urls = this.AGADIR['previsions'];
          break; 
        }
        case 'IFNI': { 
          this.urls = this.IFNI['previsions'];
          break; 
        } 
         case 'ESSAOUIRAA': { 
          this.urls = this.ESSAOUIRAA['previsions'];
          break; 
        } 
        case 'DAKHLA': { 
          this.urls = this.DAKHLA['previsions'];
          break;  
        } 
        case 'OUKAIMDEN': { 
          this.urls = this.OUKAIMDEN['previsions'];
          break;  
        } 
        case 'MICHLIFEN': { 
          this.urls = this.MICHLIFEN['previsions'];
          break; 
        } 
        case 'MERZOUGA': { 
          this.urls = this.MERZOUGA['weather'];
          break; 
        } 
      }

    }else{
      this.getdata(this.id);      
    }
  }
  
    getdata(id){

      this.httpProvider.getJsonData(id).subscribe(
        result => {
          this.newsData=result;
          console.log(this.newsData);
          var arr = this.newsData.content.rendered.split("|");
          if(arr.length > 1 || this.param == 'maison'){
            var m, rex =  /<img.*?src="([^">]*\/([^">]*?))".*?>/g; 
            for (var index = 0; index < arr.length; index++) {
              var urls = [];
              while ( m = rex.exec( arr[index] ) ) {
                  urls.push( m[1] );
              }
              this.houses.push( [urls,arr[index].replace(/<img[^>]*>/g,"")] ); 
            }
            console.log( this.houses ); 
          }else{
            this.loadData(this.newsData.content.rendered);            
          }
          
        },
        err =>{
          console.error("Error : "+err);
        } ,
        () => {
          console.log('getData completed');
        }
      );
    }

}
