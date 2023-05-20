import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './services/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const allowedRole = route.data['allowedRole'];


    if (allowedRole === 'manager' && this.authService.isManager()) {
      return true;
    } else if (allowedRole === 'admin' && this.authService.isAdmin()) {
      return true;
    }
    else if (allowedRole === 'employee' && this.authService.isEmployee()) {
      return true;
    }
    console.log(allowedRole , this.authService.isManager(), this.authService.isAdmin())
    return this.router.navigate(['/']);
}

}
