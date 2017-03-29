import { Component, OnInit } from '@angular/core';

import { SessionService } from '../services/session-service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newTechInfo = {};
  loginInfo ={};

  user: any;
  error: string;
  myData: any;

  constructor(private mySessionService: SessionService) { }

  ngOnInit() {
    this.mySessionService.isLoggedIn()
    .then(userInfo => this.user = userInfo);
  }

  createTechLogin(){
    this.mySessionService.createTechLogin(this.newTechInfo)
    .then((techInfo)=>{
      this.user = techInfo;
      this.error = null;
    })
    .catch((err)=>{
      this.user = null;
      this.error = err;
    });
  }

  login(){
    this.mySessionService.login(this.loginInfo)
    .then((userInfo)=>{
      this.user = userInfo;
      this.error = null;
    })
    .catch((err)=>{
      this.user = null;
      this.error = err;
    });
  }

  logout(){
    this.mySessionService.logout()
    .then(()=>{
      this.user = null;
      this.error = null;
    })
    .catch(err => this.error = err);
  }



}
