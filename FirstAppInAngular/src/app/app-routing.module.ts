import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {ProductComponent} from "./product/product.component";
import {LimitedAccessComponent} from "./limited-access/limited-access.component";
import {AuthGuard} from "./auth.guard";
import {LimitedAccessGuard} from "./limited-access.guard";
import {CheckCredentialGuard} from "./check-credential.guard";
import {EditProductComponent} from "./edit-product/edit-product.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  // {path: 'register', component: RegisterComponent, canDeactivate: [DeactivateGuard]},
  // {path: 'album', component: AlbumsComponent},
  // {
  //   path: 'album/:id', component: AlbumDetailsComponent,
  //   data: {message: 'This Album Is Heavy'},
  //   resolve: {album: resolveGuard}
  // },
  // {path: 'not-found', component: NotFoundComponent},

  // {path: 'users', component: Users`Component},
  // {path: 'users/:id', component: UserComponent},
  // {path: 'admin', component: AdminComponent,canActivate:[authGuard]},
  // {
  //   path: 'admin', component: AdminComponent, canActivateChild: [auth2Guard], children: [
  //     {path: 'manageUser', component: ManageUserComponent},
  //     {path: 'managepage', component: ManagePageComponent}
  //   ]
  // },
  // {path: 'about', component: AboutComponent},
  // {path: 'notAuthorized', component: NotAuthorizedComponent},
  // {path: 'clients', component: ClientsComponent},
  // {path: '**', component: NotFoundComponent},
  // {path: 'product', component: ProductComponent, canActivate: [AuthGuard, LimitedAccessGuard, CheckCredentialGuard]},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard], data: {roles: ['admin']}},
  {path: 'editProduct', component: EditProductComponent, canActivate: [AuthGuard], data: {roles: ['user']}},
  {path: 'not-autorized', component: NotAuthorizedComponent},
  {path: 'limited-access', component: LimitedAccessComponent},
  {path: '**', redirectTo: 'not-found'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
