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


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'users', component: UsersComponent},
  // {path: 'users/:id', component: UserComponent},
  {path: 'admin', component: AdminComponent,canActivate:[authGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'notAuthorized', component: NotAuthorizedComponent},
  // {path: 'clients', component: ClientsComponent},
  // {path: 'not-found', component: NotFoundComponent},
  // {path: '**', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
