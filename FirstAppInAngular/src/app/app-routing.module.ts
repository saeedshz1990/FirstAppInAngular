import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {AdminComponent} from "./admin/admin.component";
import {ClientsComponent} from "./clients/clients.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {UserComponent} from "./user/user.component";
import {AboutComponent} from "./about/about.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {authGuard} from "./auth.guard";
import {ManageUserComponent} from "./manage-user/manage-user.component";
import {ManagePageComponent} from "./manage-page/manage-page.component";
import {auth2Guard} from "./auth2.guard";
import {RegisterComponent} from "./register/register.component";
import {DeactivateGuard} from "./deactivate.guard";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailsComponent} from "./album-details/album-details.component";
import {resolveGuard} from "./resolve.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard]},
  {path: 'album', component: AlbumsComponent},
  {
    path: 'album/:id', component: AlbumDetailsComponent,
    data: {message: 'This Album Is Heavy'},
    resolve: {album: resolveGuard}
  },
  {path: 'not-found', component: NotFoundComponent},

  // {path: 'users', component: UsersComponent},
  // {path: 'users/:id', component: UserComponent},
  // {path: 'admin', component: AdminComponent,canActivate:[authGuard]},
  {
    path: 'admin', component: AdminComponent, canActivateChild: [auth2Guard], children: [
      {path: 'manageUser', component: ManageUserComponent},
      {path: 'managepage', component: ManagePageComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'notAuthorized', component: NotAuthorizedComponent},
  // {path: 'clients', component: ClientsComponent},
  // {path: '**', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
