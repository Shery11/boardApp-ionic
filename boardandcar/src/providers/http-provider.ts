
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  getJsonData(id){
    var random = Math.floor(Math.random() * 10000);//wp-json/v2/post
    return this.http.get('http://boardandcar.com/wp-json/wp/v2/posts/'+id+'?random='+random).map(res => res);
  }

}