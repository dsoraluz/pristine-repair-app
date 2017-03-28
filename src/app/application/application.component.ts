import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../services/applicant-service/applicant.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generateApplicationInfo(){

  }

  submitApplication(){
    this.generateApplicationInfo();
  }

}
