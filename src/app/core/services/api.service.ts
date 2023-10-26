import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs/operators';
import { environment1 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   
  constructor(public http: HttpClient,) { }

  login(data: any) {

    return this.http.post < any > (`${environment1.baseURL}auth/register`, data, {
        headers: {
          'Content-Type': 'application/json'
    }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Create Itom
  createItem(data: any) {
    return this.http.post < any > (`${environment1.baseURL}item`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



// Get all Itom
  gatAllItem() {
    return this.http.post < any > (`${environment1.baseURL}item`, {
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }


  // Update Itom
  updateItem(id:any,data:any){
    return this.http.put<any>(`${environment1.baseURL}item/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// DeleteItom
  deleteItem(id:any){
    return this.http.delete<any>(`${environment1.baseURL}item/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



  // Create dealers
  createDealers(data: any) {
    return this.http.post < any > (`${environment1.baseURL}dealers`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Get Dealers
  gatAllDealers() {
    return this.http.get < any > (`${environment1.baseURL}dealers`, {
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Dealers
  updateDealers(id:any,data:any){
    return this.http.put<any>(`${environment1.baseURL}dealers/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



  // delete Dealers
  deleteDealers(id:any){
    return this.http.delete<any>(`${environment1.baseURL}dealers/`+id,{
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Get all Orders
createOrders(data:any) {
  return this.http.post < any > (`${environment1.baseURL}orders`, data,{
    headers: {
      'Content-Type': 'application/json'
    }
    })
    .pipe(map((data: any) => {
      return data;
    }));

}


  // Get Orders
  gatAllOrders() {
    return this.http.get < any > (`${environment1.baseURL}orders`, {
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }



  // Update Orders
  updateOrders(id:any,data:any){
    return this.http.put<any>(`${environment1.baseURL}orders/`+id,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
  .pipe(map((data:any)=>{
    return data;
  }))
  }



// Delete Orders
deleteOrders(id:any){
  return this.http.delete<any>(`${environment1.baseURL}orders/`+id,{
})
.pipe(map((data:any)=>{
  return data;
}))
}



}




// items

