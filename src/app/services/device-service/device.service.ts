import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeviceService {

  // BASE_URL: string ='http://localhost:3000'
  BASE_URL: string ='';

  constructor(private myHttp: Http) { }

  getDevices(){
    return this.myHttp.get(`${this.BASE_URL}/api/devices`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getModel(id){
    return this.myHttp.get(`${this.BASE_URL}/api/devices/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getColors(id){
    return this.myHttp.get(`${this.BASE_URL}/api/devices/${id}/colors`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getRepairType(id){
    return this.myHttp.get(`${this.BASE_URL}/api/devices/${id}/repairType`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getRepairCost(id){
    return this.myHttp.get(`${this.BASE_URL}/api/devices/${id}/repairCost`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getModelNumbers(id){
    return this.myHttp.get(`${this.BASE_URL}/api/devices/model-numbers`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }


}
