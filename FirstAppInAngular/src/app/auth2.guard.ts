import { CanActivateFn } from '@angular/router';

export const auth2Guard: CanActivateFn = (route, state) => {
  // @ts-ignore
  return this.isAuthenticated().then((authenticated:boolean)=>{
    if (authenticated){
      return true
    }
    else {
      // return false;
      // @ts-ignore
      this.router.navigate('/notAuthorized')
    }
  });
};
