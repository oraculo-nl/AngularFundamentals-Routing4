import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MagActiverenService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.validateZipcode(route.params["id"])) {
      console.log('Ongeldig argument'); return false;
    }
    return true;
  }

  validateZipcode(zipcode: string) {
    //postcode moet 4 cijfers en 2 letters zijn
    var regex = /^[0-9]{4}[\s]?[A-Za-z]{2}$/i;
    return regex.test(zipcode);
  }
}
