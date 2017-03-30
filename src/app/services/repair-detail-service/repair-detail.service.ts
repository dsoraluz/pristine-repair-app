import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class RepairDetailService {
  //------------ FOR DEVELOPMENT (UNCOMMENT) --------------------

  // BASE_URL: string = 'http://localhost:3000';
  BASE_URL: string = '';


  constructor(private myHttp: Http) { }

  sendDetails(requestInfo){
    const headers = new Headers({'Content-Type': "application/json"});
    const options = { headers: headers};
    return this.myHttp.post(`${this.BASE_URL}/api/repair-details`,requestInfo, options)
    .toPromise()
    .then(myApiString => myApiString.json());
  }

}
