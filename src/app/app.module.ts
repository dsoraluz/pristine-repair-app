import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------- SERVICES ---------------------------------------------
import { ApplicantService } from './services/applicant-service/applicant.service';
import { SessionService } from './services/session-service/session.service';
import { DeviceService } from './services/device-service/device.service';
import { RepairDetailService } from './services/repair-detail-service/repair-detail.service';
import { CustomerService } from './services/customer-service/customer.service';
import { TechService } from './services/tech-service/tech.service';
import { KeysPipe } from './pipes/keys.pipe';

//-------------- COMPONENTS --------------------------------------------
import { RequestRepairComponent } from './request-repair/request-repair.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedOnComponent } from './featured-on/featured-on.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestRepairComponent,
    KeysPipe,
    LandingPageComponent,
    NavBarComponent,
    FooterComponent,
    FeaturedOnComponent,
    LoginComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApplicantService,
    SessionService,
    DeviceService,
    RepairDetailService,
    CustomerService,
    TechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
