import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagActiverenService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.validateZipcode(route.params["id"])) {
      console.log('Ongeldig argument'); return false;
    }
    // if (isNaN(route.params["id"]) == true) {
    //   console.log("Ongeldig argument " + route.params["id"]); return false;
    // }
    return true;
  }

  validateZipcode(zipcode:string) {
    var regex = /^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$/i;
    return regex.test(zipcode);
  }
}
