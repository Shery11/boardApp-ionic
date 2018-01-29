import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[HttpProvider]
})
export class ContactPage {
  
options : InAppBrowserOptions = {
  location : 'yes',//Or 'no'   
};
  newsData: any;
  public houses = [];
  
    @ViewChild('dataContainer') dataContainer: ElementRef;
    
    loadData(data) {
        this.dataContainer.nativeElement.innerHTML = data;
    }

  constructor(private theInAppBrowser: InAppBrowser, public navCtrl: NavController,public translate: TranslateService, private httpProvider:HttpProvider,public sanitizer: DomSanitizer) {
    if(this.translate.currentLang == 'fr'){
      this.getdata(3931);
    }else{
      this.getdata(3933);
    }
  }
  getdata(id){
    
          this.httpProvider.getJsonData(id).subscribe(
            result => {
              this.newsData=result;
              console.log(this.newsData);
              var arr = this.newsData.content.rendered.split("|");
              if(arr.length > 1){
                var m, rex =  /<img.*?src="([^">]*\/([^">]*?))".*?>/g; 
                for (var index = 0; index < arr.length; index++) {
                  var urls = [];
                  while ( m = rex.exec( arr[index] ) ) {
                      urls.push( m[1] );
                  }
                  this.houses.push( [urls,arr[index].replace(/<img[^>]*>/g,"")] ); 
                }
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

        public openWithSystemBrowser(url : string){
          console.log(url);
          console.log(String(url).match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\\=]*)/));
          let target = "_system";
          if(String(url).match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\\=]*)/).length>0){
           this.theInAppBrowser.create(String(url).match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\\=]*)/)[0],target,this.options);
          }
      }
}
