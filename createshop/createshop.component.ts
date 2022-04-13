import { Component, OnInit } from '@angular/core';
import { Shopmodel } from '../models/shopmodel';
import { CreateshopserviceService } from '../service/createshopservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-createshop',
  templateUrl: './createshop.component.html',
  styleUrls: ['./createshop.component.css']
})
export class CreateshopComponent implements OnInit {

shopmodel = new Shopmodel("","","","","","",0,0);
  constructor(
    private createshopservice: CreateshopserviceService
  ) { 
    
  }

  ngOnInit(): void {
  }


  onSubmitButtonClicked() {
    console.log("login successful"+this.shopmodel.ShopName);
     console.log("login successful"+this.shopmodel.ShopphoneNumber);
     console.log("login successful"+this.shopmodel.Shopemail);
     console.log("login successful"+this.shopmodel.ShopAdress);
     console.log("login successful"+this.shopmodel.Pincode);
     //HIDDEN
     console.log("login successful"+this.shopmodel.LongId);
     console.log("login successful"+this.shopmodel.UserId);
     console.log("login successful"+this.shopmodel.Date);
 
     this.createshopservice.createshop(this.shopmodel)
              .pipe(first())
             .subscribe(
                data => {
                    console.log(data.shopname);
                },
                 error => {
                   console.log(error);
                 });
   }
 }
 
 
