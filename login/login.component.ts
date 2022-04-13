import { Component, OnInit , Inject } from '@angular/core';
import { Validators, AbstractControl, FormBuilder, FormGroup, FormControl ,   FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import{UserModel} from'../models/user.model';
//import { FormGroup } from '@angular/forms';
// import { CheckRequiredField } from '../_shared/helpers/form.helper';
// import { AuthService } from '../_auth/services/auth.service';
import {UserserviceService} from '../service/userservice.service';
import { first } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 
//userModel= new UserModel("","","","","","");
  processing: Boolean = false;
  error: Boolean = false;
  isSubmitted  =  false;
  

  loginForm= new FormGroup({
    
  });

  
  

//   checkField  = CheckRequiredField;

  constructor(
    private userService: UserserviceService,
    private router: Router,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private fb: FormBuilder
    
  ) { 
    
  }

  //myForm() {
    //this.loginForm = this.fb.group({
    //email: ['', [Validators.required, 
     //  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")] ]
    //});
// }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
  });
    
  }

  
  

  onSubmitButtonClicked() {


    
   console.log("loginsuccessful");
  //this is uesd for formdata
   var formData: any = new FormData();
   formData.append("phone", this.loginForm.value.phone);
    formData.append("password", this.loginForm.value.password);

   
    console.log(formData);
   this.userService.login(formData)
    .pipe(first())
    .subscribe(
      data => {
       
          
           console.log(data.code)
           
              if(data.code=='200')
              {
               // sessionStorage.setItem('ownerId', data.Content.id);
              //sessionStorage.setItem('roleId', data.Content.roleId.id);
              //console.log (sessionStorage.getItem("ownerId"));
                this.router.navigate(['/dashbourd']);
              }
              else{
                alert("invalid username or password")
              } 
             // console.log(data.content.id)
              //console.log(data.content.roleId)
              
              //console.log(data.content.roleId.id)

              
                },
              error => {
                console.log(error.code);
                 console.log(error);
                
                });
  }



  

  
    
  
}
