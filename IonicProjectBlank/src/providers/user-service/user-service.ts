import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class UserServiceProvider {
  uri = 'http://localhost:8080/gymnastic';
  constructor(public http: HttpClient) {
  }

  getAllGymnastics(): Observable<any> {
    return this.http.get('http://localhost:8080/gymnastics');
  }

  get(id: string) {
    return this.http.get(this.uri + '/' + id);
  }

  remove(id: string) {
    return this.http.delete(this.uri + '/' + id);
  }

  add(gymnastic: any){
    return this.http.post(this.uri, gymnastic);
  }
}
