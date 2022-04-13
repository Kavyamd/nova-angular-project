import { Component, OnInit } from '@angular/core';
import { Availibilitymodel } from '../models/availibilitymodel';
import { CreateshopserviceService } from '../service/createshopservice.service';
import { first } from 'rxjs';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-availibility',
  templateUrl: './availibility.component.html',
  styleUrls: ['./availibility.component.css']
})
export class AvailibilityComponent implements OnInit {
  availibilitymodel = new Availibilitymodel("","","","","",0);
  constructor(
    private createshopservice: CreateshopserviceService
  ) { 
    
  }


  ngOnInit(): void {
  }
  onSubmitButton() {
        
        console.log("login successful"+this.availibilitymodel.ShopDetails);
    console.log("login successful"+this.availibilitymodel.datetodate);
    console.log("login successful"+this.availibilitymodel.datefromdate);
    console.log("login successful"+this.availibilitymodel.timetotime);
    console.log("login successful"+this.availibilitymodel.timefromtime);
    console.log("login successful"+this.availibilitymodel.LongId);
   
    

    this.createshopservice.shopavailibility(this.availibilitymodel.datefromdate)
             .pipe(first())
            .subscribe(
               data => {
                   console.log(data.ShopDetails);
               },
                error => {
                  console.log(error);
                });
  }
}

