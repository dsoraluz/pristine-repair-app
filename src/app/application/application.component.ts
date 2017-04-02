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



    applicationInfo: Object = {};

  constructor(private myApplicantService: ApplicantService) { }

  ngOnInit() {
  }


  submitApplication(){


    console.log(this.applicationInfo);

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
