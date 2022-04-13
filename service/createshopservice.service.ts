import { Injectable } from '@angular/core';
import { CreateshopComponent } from '../createshop/createshop.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shopmodel } from '../models/shopmodel';


@Injectable({
  providedIn: 'root'
})
export class CreateshopserviceService {
  getShopDetails() {
   return this.http.get<any>('http://3.94.111.96:8081/admin/shopDetailController/getAllShopDetails');
     throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) { }

  createshop(data:any):Observable<any>{

    return this.http.post<any>('http://3.94.111.96:8081//admin/shopDetailController/createShop',data);

}
shopavailibility(data:any):Observable<any>{

  return this.http.post<any>('http://3.94.111.96:8081//admin/shopDetailController/createShop',data);

}
}
