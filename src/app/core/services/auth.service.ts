import { Injectable } from '@angular/core';
import { getFirebaseBackend } from '../../authUtils';
import { User } from '../models/auth.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    private currentUser:Observable<User>
    constructor(public http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() : User{
        return this.currentUserSubject.value;
    }

    login(data:any){
        console.log(data)
        return this.http.post<any>(`${environment.baseURL}auth/authenticate`,data,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        .pipe(map((data,re)=>{
            localStorage.setItem("currentUser",JSON.stringify(data.data));
            this.currentUserSubject.next(data.data);
          return data;
        }));
    }

    
    

    /**
     * Logout the user
     */
    logout() {
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null!);
        window.location.replace("/")
    }


}

