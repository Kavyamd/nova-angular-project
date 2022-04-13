import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DashbourdComponent } from './dashbourd/dashbourd.component';
import { DataTablesModule } from "angular-datatables";
import {Subject} from 'rxjs';
import { CreateshopComponent } from './createshop/createshop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
 import {MatDividerModule} from '@angular/material/divider';
 import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
 import { MatInputModule } from '@angular/material/input'; 

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatSelectModule } from '@angular/material/select';
import { AvailibilityComponent } from './availibility/availibility.component';
import { CreateslotsComponent } from './createslots/createslots.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    DashbourdComponent,
    CreateshopComponent,
    AvailibilityComponent,
    CreateslotsComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
  


    RouterModule.forRoot([
      {path: 'login', component:LoginComponent},
      {path: 'register', component:RegistrationComponent},
      {path: 'menu', component:MenuComponent},
      {path: 'dashbourd', component:DashbourdComponent},
      {path: 'createshop', component:CreateshopComponent},
      {path: 'availibility', component:AvailibilityComponent},
      {path: 'createslots', component:CreateslotsComponent}
    ]),

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
