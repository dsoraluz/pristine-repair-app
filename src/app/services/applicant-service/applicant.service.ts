import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApplicantService {

  BASE_URL = "http://localhost:3000";

  constructor(private myHttp: Http) { }

  sendApplication(applicationInfo){
    const headers = new Headers({'Content-Type': "application/json"});
    const options = { headers: headers};
    return this.myHttp.post(`${this.BASE_URL}/apply`, applicationInfo, options)
    .toPromise()
    .then(myApiString => myApiString.json());
  }
}
