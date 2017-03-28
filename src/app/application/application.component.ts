import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../services/applicant-service/applicant.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

    errorMessage: String;

    appSubmitted: Boolean = false;

    firstName:              String;
    lastName:               String;
    phone:                  String;
    email:                  String;
    address:                String;
    addressLine2:           String;
    city:                   String;
    state:                  String;
    market:                 String;
    zipCode:                String;
    country:                String;
    background:             String;
    workInUs:               String;
    over18:                 String;
    bestContactTime:        String;
    transportation:         String;
    ableToStart:            String;
    pastExperience:         String;
    experienceDescription:  String;
    numberOfPhonesDone:     String;
    numberOfTabletsDone:    String;
    formalTraining:         String;
    referredBy:             String;

    applicationInfo: Object;

  constructor(private myApplicantService: ApplicantService) { }

  ngOnInit() {
  }

  generateApplicationInfo(){

    this.applicationInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      address: this.address,
      addressLine2: this. addressLine2,
      city: this.city,
      state: this.state,
      market: this.market,
      zipCode: this.zipCode,
      country: this.country,
      background: this.background,
      workInUs: this.workInUs,
      over18: this.over18,
      bestContactTime: this.bestContactTime,
      transportation: this.transportation,
      ableToStart: this.ableToStart,
      pastExperience: this.pastExperience,
      experienceDescription: this.experienceDescription,
      numberOfPhonesDone: this.numberOfPhonesDone,
      numberOfTabletsDone: this.numberOfTabletsDone,
      formalTraining: this.formalTraining,
      referredBy: this.referredBy
  };

  }

  submitApplication(firstName,lastName, phone, email, address, addressLine2, city, state, market, zipCode, country, background, workInUs, over18, bestContactTime, transportation, ableToStart, pastExperience, experienceDescription, numberOfPhonesDone, numberOfTabletsDone, formalTraining, referredBy){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.addressLine2 = addressLine2;
    this.city = city;
    this.state = state;
    this.market = market;
    this.zipCode = zipCode;
    this.country = country;
    this.background = background;
    this.workInUs = workInUs;
    this.over18 = over18;
    this.bestContactTime = bestContactTime;
    this.transportation = transportation;
    this.ableToStart = ableToStart;
    this.pastExperience = pastExperience;
    this.experienceDescription = experienceDescription;
    this.numberOfPhonesDone = numberOfPhonesDone;
    this.numberOfTabletsDone = numberOfTabletsDone;
    this.formalTraining = formalTraining;
    this.referredBy = referredBy;

    this.generateApplicationInfo();

    this.myApplicantService.sendApplication(this.applicationInfo)
    .then((applicationCreated)=>{
      this.appSubmitted = true;
      console.log(applicationCreated);
    })
    .catch((err)=>{
      this.errorMessage = "Could not submit application. Try again later."
    });
  }

}
