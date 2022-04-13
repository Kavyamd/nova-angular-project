import { Injectable } from '@angular/core';
import {RegistrationComponent} from '../registration/registration.component';
import{HttpClient} from '@angular/common/http';

import { Observable} from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
   
  providedIn: 'root'
})



export class UserserviceService {
  URL="http://3.94.111.96:8081/admin/shopDetailController/getAllShopDetails?ownerId=3"

  constructor(private http:HttpClient) { }

  //signinUser(email: string, password: string) {
   // firebase.auth().signInWithEmailAndPassword(email, password).then(
       // response => {
           // this.router.navigate(['/recipes']);
            //firebase.auth().currentUser.getIdToken()
            //.then(
             //   (token: string) => this.token = token
           // );
       // }
   // )
   // .catch (
       // error => console.log(error)

   // );
//}


  getShopDetails() {
    return this.http.get<any>('http://3.94.111.96:8081/admin/shopDetailController/getAllShopDetails?ownerId=3');
    //throw new Error('Method not implemented.');
  }
  
  login(data: any):Observable<any> {
    return  this.http.post<any>('http://3.94.111.96:8081/admin/getUserByPhoneAndPassword',data);
  }
    
  

  
  /**
   * getNews
   */
  reggister(data: any):Observable<any>{
    return this.http.post<any>('http://3.94.111.96:8081/admin/saveUser',data);
  }
}
