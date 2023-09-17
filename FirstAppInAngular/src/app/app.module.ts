import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from "./user/user.component";
import {UsersComponent} from './users/users.component';
import {FormsModule} from "@angular/forms";
import {SwitchCase1Component} from './switch-case1/switch-case1.component';
import {SwitchCase2Component} from './switch-case2/switch-case2.component';
import {SwitchCase3Component} from './switch-case3/switch-case3.component';
import {SwitchCase4Component} from './switch-case4/switch-case4.component';
import {StarComponent} from './star/star.component';
import {AdduserComponent} from './adduser/adduser.component';
import {UsertableComponent} from './usertable/usertable.component';
import {IncComponent} from './inc/inc.component';
import {ColorfulDirective} from './colorful.directive';
import {AppHighlightDirective} from './app-highlight.directive';
import {CarouselDirective} from './carousel.directive';
import {HomeComponent} from './home/home.component';
import {Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {LoggingService} from "./logging.service";
import {AdminComponent} from './admin/admin.component';
import {MyCompanyService} from "./my-Company.service";
import { ClientsComponent } from './clients/clients.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { RegisterComponent } from './register/register.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';


// export function myCompanyServiceProvider(): MyCompanyService {
//   return new MyCompanyService();
// }
//
// export const MYCOMPANY_SERVICE_TOKEN = new InjectionToken<MyCompanyService>('MYCOMPANY_SERVICE_TOKEN')

// export const USER_AGENT = new InjectionToken<string>('USER_AGENT');
// export const SCREEN_WIDTH = new InjectionToken<string>('SCREEN_WIDTH');
// export const SCREEN_HEIGHT = new InjectionToken<string>('SCREEN_HEIGHT');
//
// export function deviceNameProvider(userAgent: string, screenWidth: string, screenHeight: string): string {
//   return userAgent + ' ' + screenWidth + ' ' + screenHeight;
// }
//
// export const DEVICE_NAME_TOKEN = new InjectionToken<string>('DEVICE_NAME_TOKEN');
// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'users', component: UsersComponent},
//   {path: 'admin', component: AdminComponent},
// ]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    SwitchCase1Component,
    SwitchCase2Component,
    SwitchCase3Component,
    SwitchCase4Component,
    StarComponent,
    AdduserComponent,
    UsertableComponent,
    IncComponent,
    ColorfulDirective,
    AppHighlightDirective,
    CarouselDirective,
    HomeComponent,
    AdminComponent,
    ClientsComponent,
    NotFoundComponent,
    AboutComponent,
    NotAuthorizedComponent,
    ManageUserComponent,
    ManagePageComponent,
    RegisterComponent,
    AlbumsComponent,
    AlbumDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    // RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  // providers: [LoggingService],
  // providers: [],
  providers: [
    LoggingService,
    MyCompanyService,
    // {provide: USER_AGENT, useValue: window.navigator.userAgent},
    // {provide: SCREEN_WIDTH, useValue: window.screen.width},
    // {provide: SCREEN_HEIGHT, useValue: window.screen.height},
    // {provide: DEVICE_NAME_TOKEN, useFactory: deviceNameProvider, deps: [USER_AGENT, SCREEN_WIDTH, SCREEN_HEIGHT]}
    // {provide: MYCOMPANY_SERVICE_TOKEN, useFactory: myCompanyServiceProvider}
    // {provide: LoggingService, useClass: LoggingService},
    // {provide: "API_URL", useClass: "localhost5200/api/v2"}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
