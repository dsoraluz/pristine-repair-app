import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SessionService {


  constructor(private myHttp: Http) { }

  BASE_URL: string = 'http://localhost:3000/api';

  createTechLogin (techLogin){
    return this.myHttp.post(`${this.BASE_URL}/create-tech-login`, techLogin)
    .toPromise()
    .then(result => result.json());
  }

  login (credentials){
    const options = { withCredentials: true };
    console.log(credentials);
    return this.myHttp.post(`${this.BASE_URL}/login`, credentials, options)
    .toPromise()
    .catch()
    .then(result => result.json());
  }

  logout () {
    return this.myHttp.post(`${this.BASE_URL}/logout`, {})
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    return this.myHttp.get(`${this.BASE_URL}/loggedin`)
      .toPromise()
      .then(result => result.json());
  }

  getPrivate () {
    return this.myHttp.get('/private')
      .toPromise()
      .then(result => result.json());
  }
}
