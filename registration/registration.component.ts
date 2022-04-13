import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import{UserModel} from'../models/user.model'
import {UserserviceService} from '../service/userservice.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  userModel= new UserModel("","","","","","");
  constructor(
    private userService: UserserviceService
  ) {}    
  

  

  ngOnInit(): void {



  }

  onSubmitButtonClicked() {
    console.log("loginsuccessfull");
    
// this method is used for row data or payrole display in flower brackets {}

    this.userService.reggister(this.userModel)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data.id);
                },
                error => {
                  console.log(error);
                });
  }
}
