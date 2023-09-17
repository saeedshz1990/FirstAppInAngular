import {ActivatedRouteSnapshot, CanActivateFn, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {album} from "./interfaces/app.interface";
import {delay, Observable, of, tap} from "rxjs";
import {AlbumsServices} from "./albums.services";

// export const resolveGuard: CanActivateFn = (route, state) => {
//   return true;
// };
export class resolveGuard implements Resolve<album> {
  constructor(private albuumService: AlbumsServices, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<album> | Promise<album> | album {
    const id = route.paramMap.get('id');
    // @ts-ignore
    let album = this.albuumService.albums.find(album => album.id === +id);
    if (!album) {
      // @ts-ignore
      return of(null).pipe(
        delay(5000),
        tap(() => this.router.navigate(['/notFound']))
      );
    } else {
      return of(album).pipe(
        delay(5000)
      );
    }
  }

}
