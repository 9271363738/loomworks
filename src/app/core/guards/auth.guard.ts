import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// Auth Services
import { AuthenticationService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) {
        const currentUser = this.authenticationService.currentUserValue;
            if (currentUser) {
                console.log(currentUser);
                if(route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1)
                switch(currentUser.role){
                    case "admin":
                        this.router.navigate(["/admin/dashboard"])
                        break;
                    case "user":
                        this.router.navigate(["/user/dashboard"])
                        break;


                }
                
                return true;
            }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
