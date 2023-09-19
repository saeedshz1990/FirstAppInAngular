import {CanActivateFn, Router} from '@angular/router';


export const CheckCredentialGuard: CanActivateFn = (route, state) => {

  // if (condition){
  //   return true;
  // }
  // @ts-ignore
  return this.Router.createUrlTree(['/not-autorized']);
};
