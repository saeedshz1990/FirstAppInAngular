import {CanActivateFn} from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {

  let roles = route.data['roles'] as string[];
  let returnUrl = state.url;

  // @ts-ignore
  return this.router.createUrlTree(['/not-authorized'], {
    queryParams: {
      returnUrl: returnUrl;
    }
  })

};
