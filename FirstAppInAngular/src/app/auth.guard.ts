import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
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

  // constructor(private){}
};
// constructor(private authService AuthService,private router : Router)
