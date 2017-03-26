import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeviceService } from './services/device-service/device.service';
import { RepairDetailService } from './services/repair-detail-service/repair-detail.service';
import { CustomerService } from './services/customer-service/customer.service';
import { TechService } from './services/tech-service/tech.service';
import { RequestRepairComponent } from './request-repair/request-repair.component';

import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RequestRepairComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DeviceService, RepairDetailService, CustomerService, TechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
