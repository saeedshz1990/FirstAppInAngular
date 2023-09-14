import {ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

// export const deactivateGuard: CanActivateFn = (route, state) => {
//   return true;
// };
// @ts-ignore
export class DeactivateGuard implements CanDeactivateFn<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }
}
