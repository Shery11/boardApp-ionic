import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavParams,NavController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

declare var google:any;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  providers:[HttpProvider]
})
export class MapsPage {
  newsData: any;
  id: any;
  spots: any = [];
  spot: any;
  Destination: any = '';
  MyLocation: any;

  @ViewChild('dataContainer') dataContainer: ElementRef;
  
  loadData(data) {
      this.dataContainer.nativeElement.innerHTML = data;
  }


  TAGHAZOUT = {route:3540};
  ESSAOUIRA = {route:3544};
  IMSOUANE = {route:3553};
  AGADIR = {route:3536};
  IFNI = {route:3548};
  ESSAOUIRAA = {route:3557};
  DAKHLA = {route:3561};
  OUKAIMDEN = {route:3573};
  MICHLIFEN = {route:3569};
  MERZOUGA = {route:3565};
  


  TAGHAZOUTEN = {route:3555};
  ESSAOUIRAEN = {route:3546};
  IMSOUANEEN = {route:3546};
  AGADIREN = {route:3538};
  IFNIEN = {route:3551};
  ESSAOUIRAAN = {route:3559};
  DAKHLAN = {route:3563};
  OUKAIMDENN = {route:3575};
  MICHLIFENN = {route:3571};
  MERZOUGAN = {route:3567};



  

  constructor(platform: Platform, public navParams: NavParams , public geolocation: Geolocation, public navCtrl: NavController,public translate: TranslateService, private httpProvider:HttpProvider) {
    
    //this.id = null;

    switch(navParams.get("spot")){
      case 'TAGHAZOUT': { 
        this.id = ( this.translate.currentLang == 'fr')?this.TAGHAZOUT['route']:this.TAGHAZOUTEN['route'];
        break; 
      } 
      case 'ESSAOUIRA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.ESSAOUIRA['route']:this.ESSAOUIRAEN['route'];
        break; 
      } 
      case 'IMSOUANE': { 
        this.id = (this.translate.currentLang  == 'fr')?this.IMSOUANE['route']:this.IMSOUANEEN['route'];
        break; 
      } 
      case 'AGADIR': { 
        this.id = (this.translate.currentLang  == 'fr')?this.AGADIR['route']:this.AGADIREN['route'];
        break; 
      } 
      case 'IFNI': { 
        this.id = (this.translate.currentLang  == 'fr')?this.IFNI['route']:this.IFNIEN['route'];
        break; 
      }
      case 'ESSAOUIRAA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.ESSAOUIRAA['route']:this.ESSAOUIRAAN['route'];
        break; 
      } 
      case 'DAKHLA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.DAKHLA['route']:this.DAKHLAN['route'];
        break; 
      } 
      case 'OUKAIMDEN': { 
        this.id = (this.translate.currentLang  == 'fr')?this.OUKAIMDEN['route']:this.OUKAIMDENN['route'];
        break; 
      } 
      case 'MICHLIFEN': { 
        this.id = (this.translate.currentLang  == 'fr')?this.MICHLIFEN['route']:this.MICHLIFENN['route'];
        break; 
      }  
      case 'MERZOUGA': { 
        this.id = (this.translate.currentLang  == 'fr')?this.MERZOUGA['route']:this.MERZOUGAN['route'];
        break; 
      }  
    }
    if(this.translate.currentLang  == 'fr'){
      this.getdata(this.id);
    }else{
      this.getdata(this.id);
    }
    //alert('a');
    /*this.geolocation.getCurrentPosition({enableHighAccuracy: true }).then((resp) => {
      alert('' + resp.coords.latitude +', '+ resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
       alert(error);
     });
    platform.ready().then(() => {
        this.geolocation.getCurrentPosition().then((data) => {
          //alert('' + data.coords.latitude +', '+ data.coords.longitude); 
          let that = this;
          let directionsService = new google.maps.DirectionsService;
          let directionsDisplay = new google.maps.DirectionsRenderer;
          const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: data.coords.latitude, lng: data.coords.longitude}
          });
          directionsDisplay.setMap(map);
          
          var pos = {
            lat: data.coords.latitude,
            lng: data.coords.longitude
          };
          map.setCenter(pos);
          that.MyLocation = new google.maps.LatLng(pos);
      
          directionsService.route({
            origin: this.MyLocation,
            destination: "Agadir",//this.Destination,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });

        });
      
    });*/
  }

  getdata(id){
    this.httpProvider.getJsonData(id).subscribe(
      result => {
        this.newsData=result;
        console.log(result);

        var arr = this.newsData.content.rendered.split("||");
        if(arr.length > 1){
          var arr2 = arr[0].split("|");
          for (var i = 0; i < arr2.length; i++) {
            var arr3 = arr2[i].split("*");
            this.spots.push(  
              { 
                'id' : i ,
                'name' : this.escapeHtml(arr3[0]),
                'lat' : parseFloat(this.escapeHtml(arr3[1])),
                'lng' : parseFloat(this.escapeHtml(arr3[2])) 
              } );
          }
          this.onChange(0);
          this.spot = 0;
          this.loadData(arr[1]); 
          //console.log( 1 ); 
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



  onChange(value){
    console.log(value);
    console.log(this.spots[value].lat);

    this.Destination = new google.maps.LatLng({ lat: this.spots[value].lat, lng: this.spots[value].lng});

    this.geolocation.getCurrentPosition().then((data) => {
      //alert('' + data.coords.latitude +', '+ data.coords.longitude); 
      let that = this;
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: data.coords.latitude, lng: data.coords.longitude}
      });
      directionsDisplay.setMap(map);
      
      var pos = {
        lat: data.coords.latitude,
        lng: data.coords.longitude
      };
      map.setCenter(pos);
      that.MyLocation = new google.maps.LatLng(pos);
  
      directionsService.route({
        origin: this.MyLocation,
        destination: this.Destination,//this.Destination,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
    
  }


  
  
 escapeHtml(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
  
  }


}


