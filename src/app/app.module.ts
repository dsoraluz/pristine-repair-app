import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//--------------- SERVICES ---------------------------------------------
import {SessionService} from './services/session-service/session.service';
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

@NgModule({
  declarations: [
    AppComponent,
    RequestRepairComponent,
    KeysPipe,
    LandingPageComponent,
    NavBarComponent,
    FooterComponent,
    FeaturedOnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SessionService,
    DeviceService,
    RepairDetailService,
    CustomerService,
    TechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
