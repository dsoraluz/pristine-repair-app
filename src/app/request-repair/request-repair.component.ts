import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { KeysPipe } from '../pipes/keys.pipe';

import { DeviceService } from '../services/device-service/device.service';

import {RepairDetailService} from '../services/repair-detail-service/repair-detail.service';

@Component({
  selector: 'app-request-repair',
  templateUrl: './request-repair.component.html',
  styleUrls: ['./request-repair.component.css'],
})
export class RequestRepairComponent implements OnInit {

  device: Object;
  errorMessage: String = '';

  queryResult: Array<Object> = [];

  //Used to store the ID of the device chosen. (for further query purposes)
  modelId: String;


  currentDate: Date = new Date();

  openTime: String = "8";
  closeTime = 20;

  availableDays: Array<Date> = [
    // this.currentDate,
    // this.currentDate,
    // this.currentDate,
    // this.currentDate,
    // this.currentDate,
    // this.currentDate,
    // this.currentDate,
  ];

  availableTimes : Array<String> = [
    "8-9am",
    "9-10am",
    "10-11am",
    "11-12pm",
    "12-1pm",
    "1-2pm",
    "2-3pm",
    "3-4pm",
    "4-5pm",
    "5-6pm",
    "6-7pm",
    "7-8pm"
  ];




  //Booleans
  enterNameBoolean: boolean = false;
  selectModelBoolean: boolean = false;
  selectColorBoolean: boolean = false;
  selectRepairBoolean: boolean = false;
  selectDateBoolean: boolean = false;
  selectTimeBoolean: boolean = false;
  locationAndContactBoolean: boolean = false;
  verificationBoolean: boolean = false;

  //Variables to hold repair query results.
  devices: Array<Object> = [];
  models: Array<Object> = [];
  colors: Array<Object> = [];
  repairTypes: Array<String> = [];
  repairCosts: Array<Number> = [];

  //Variables to hold repair information
  // customer: String;
  // location: String;
  deviceName: String = 'iPhone';
  model: String;
  color: String;
  repairType: String;
  repairCost: Number = 100;
  requestedDate: Date;
  requestedTime: String;

  firstName: String;
  email: String;
  phone: String;
  county: String;
  area: String;

  //Object variable that will hold all request details to send to api.
  requestInfo: Object;


  constructor(
    private myDeviceService: DeviceService,
    private myRepairDetailService : RepairDetailService
  ) { }

  ngOnInit() {
    this.selectModelBoolean = true;

    for(let i = 0; i < 7; i+=1){
      this.availableDays.push(this.currentDate);
    }


    //Loads screen with all initial phone models
    this.myDeviceService.getDevices()
    .then((devicesList)=>{
      this.devices = devicesList;
    })
    .catch((err)=>{
      this.errorMessage = 'There was an error. Try again later.'
    });
  }

  //Gets the details for one single phone model by id.
  getModel(id, model){

    this.modelId = id;

    this.model = model;

    this.myDeviceService.getModel(id)
    .then((theModels)=>{
      this.models = theModels;
    })
    .catch((err)=>{
      this.errorMessage = "Could not retrieve model details. Try again later."
    });



  }

  getColors(id, selectedModel){

    this.selectModelBoolean = false;

    this.selectColorBoolean = true;

    this.modelId = id;

    this.model = selectedModel;

    this.myDeviceService.getColors(id)
    .then((theColors)=>{
      this.colors = theColors.colors;
    })
    .catch((err)=>{
      this.errorMessage = "Could not retrieve color details. Try again later."
    });

    this.getRepairCost();

  }


  getRepairType(selectedColor, selectedRepairCost){

    this.selectColorBoolean = false;
    this.selectRepairBoolean = true;

    this.color = selectedColor
    // this.repairCost = selectedRepairCost;

    this.myDeviceService.getRepairType(this.modelId)
    .then((theRepairTypes)=>{
      this.repairTypes = theRepairTypes;
      console.log(this.repairTypes);
    })
    .catch((err)=>{
      this.errorMessage = "Could not retrieve  details. Try again later."
    });
  }

  getRepairCost(){

    this.myDeviceService.getRepairCost(this.modelId)
    .then((theRepairCosts)=>{
      this.repairCosts = theRepairCosts;
      console.log(this.repairCosts);
    })
    .catch((err)=>{
      this.errorMessage = "Could not retrieve  details. Try again later."
    });
  }


  selectDate(selectedRepairType){
    this.selectRepairBoolean = false;
    this.selectDateBoolean = true;

    this.repairType = selectedRepairType;
  }

  selectTime(selectedDate){
    this.selectDateBoolean = false;
    this.selectTimeBoolean = true;

    this.requestedDate = selectedDate;
    console.log("Requested date:", this.requestedDate);
  }

  provideLocAndCon(selectedTime){
    this.selectTimeBoolean = false;
    this.locationAndContactBoolean = true;

    this.requestedTime = selectedTime;
  }

  generateRequestInfo(){
    this.requestInfo = {
      firstName: this.firstName,
      email: this.email,
      phone: this.phone,
      county: this.county,
      area: this.area,
      device: this.deviceName,
      model: this.model,
      color: this.color,
      repairType: this.repairType,
      repairCost: this.repairCost,
      requestedDate: this.requestedDate,
      requestedTime: this.requestedTime
    };

    console.log(this.requestInfo);
  }

  submitRequest(selectedCounty, selectedArea, enteredFirstName, enteredEmail, enteredPhone){


    this.locationAndContactBoolean = false;
    this.verificationBoolean = true;

    this.firstName = enteredFirstName;
    this.email = enteredEmail;
    this.phone = enteredPhone;

    this.county = selectedCounty;
    this.area = selectedArea;

    this.generateRequestInfo();

    this.myRepairDetailService.sendDetails(this.requestInfo)
    .then((repairCreated)=>{
      console.log(repairCreated);
    })
    .catch((err)=>{
      this.errorMessage = "Could not create request. Try again later."
    });

    console.log ("A pristine specialist will reach out to you shortly!")
  }


}
