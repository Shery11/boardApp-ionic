import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[HttpProvider]
})
export class AboutPage {
  newsData: any;

  @ViewChild('dataContainer') dataContainer: ElementRef;
  
  loadData(data) {
      this.dataContainer.nativeElement.innerHTML = data;
  }

  constructor(public navCtrl: NavController,public translate: TranslateService, private httpProvider:HttpProvider) {
    if(this.translate.currentLang  == 'fr'){
      this.getdata(3927);
    }else{
      this.getdata(3928);
    }
  }

  getdata(id){
    
          this.httpProvider.getJsonData(id).subscribe(
            result => {
              this.newsData=result;
              this.loadData(this.newsData.content.rendered);              
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
