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
   _header:any;
  constructor(public http: HttpClient,) { 
   
    this._header={
      'Content-Type':'application/json'
    };
  }

  login(data:any){
    console.log(data)
    return this.http.post<any>(`${environment1.baseURL}auth/authenticate`,data,{
      headers:this._header
    })
    .pipe(map((data,re)=>{
      return data;
    }));
}
}
