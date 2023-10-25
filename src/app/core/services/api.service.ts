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

    return this.http.post < any > (`${environment1.baseURL}auth/authenticate`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .pipe(map((data: any) => {
        return data;
      }));
  }
}
