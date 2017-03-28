import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {

  constructor(private myHttp: Http) { }

  createTechLogin (techLogin){
    return this.myHttp.post('/create-tech-login', techLogin)
    .toPromise()
    .then(result => result.json());
  }

  login (credentials){
    return this.myHttp.post('/login', credentials)
    .toPromise()
    .then(result => result.json());
  }

  logout () {
    return this.myHttp.post('/logout', {})
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    return this.myHttp.get('/loggedin')
      .toPromise()
      .then(result => result.json());
  }

  getPrivate () {
    return this.myHttp.get('/private')
      .toPromise()
      .then(result => result.json());
  }
}
