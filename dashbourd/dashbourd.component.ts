import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import{UserModel} from'../models/user.model'
import {UserserviceService} from '../service/userservice.service'
import { ActivatedRoute } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { data } from 'jquery';

@Component({
  selector: 'app-dashbourd',
  templateUrl: './dashbourd.component.html',
  styleUrls: ['./dashbourd.component.css']
})
export class DashbourdComponent implements OnInit {

  dashform= new FormGroup({
  
   shopname:new FormControl('') ,
  shopPhone:new FormControl('') ,
  shopAddress:new FormControl('') ,
  shoptype:new FormControl('') 
  })
  dtOptions: DataTables.Settings = {};
  //id:string;
  dtTrigger: any;
  displayStyle = "none";
  displayStyleDelete ="none"
  allShopDetails : any =[]
  
  constructor(private userService: UserserviceService, private router: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.users();
    
  }

  
  
  openPopup(_shopId: any, _shopName: any ,_shopPhone:any ,_shopAddress:any, _shopCreatedDate:any,_shopType:any) {
    console.log(_shopId);
    console.log(_shopName);
    console.log(_shopPhone);
    console.log(_shopAddress);
    console.log(_shopCreatedDate);
    console.log(_shopType);
    console.log(this.allShopDetails);
    

    this.dashform= new FormGroup({
      shopname:_shopName ,
     shopPhone:_shopPhone ,
     shopAddress:_shopAddress,
     shoptype:_shopType
      
     });
     this.displayStyle = "block";
   // this.=this.userService.( any);
    //this.router.paramMap.subscribe(para=>{
      //const shop = +para.get('_shopId');

   // });
   //this.id= this.router.snapshot.params['id']
    //this.userService.getShopDetails().subscribe(( data)=>{
      
    
    

  }
  closePopup() {
    this.displayStyle = "none";
  } 
  updateShop(){
console.log();
  }

  openPopupForDelete(){
    this.displayStyleDelete="block";
  }

  closePopupDelete() {
    this.displayStyleDelete = "none";
  } 


  // onSubmitButtonClicked() {
  //   console.log("nan ista");
  //   this.userService.getShopDetails()
  //           .pipe(first())
  //           .subscribe(
  //               data => {
  //                   console.log("here     :  :  "+data);
  //               },
  //               error => {
  //                 console.log("111"+error);
  //               });
  // }

  users(): void {
    this.userService
        .getShopDetails()
        .subscribe((response: any) => {
          this.allShopDetails = response.content;
          console.log(response[0].shopId);
        });
  }

}
