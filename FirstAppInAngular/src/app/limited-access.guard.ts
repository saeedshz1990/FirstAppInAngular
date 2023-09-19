import { CanActivateFn ,Router} from '@angular/router';

export const LimitedAccessGuard: CanActivateFn = (route, state) => {
  // if (condition){
  //   return true;
  // }
  // @ts-ignore
  return this.Router.createUrlTree(['/limited-access']);
};
