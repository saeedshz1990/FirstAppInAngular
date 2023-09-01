import {NgModule} from '@angular/core';
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
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {LoggingService} from "./logging.service";
import { AdminComponent } from './admin/admin.component';

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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    AppRoutingModule
  ],
  // providers: [LoggingService],
  // providers: [],
  providers: [
    // {provide: LoggingService, useClass: LoggingService},
    LoggingService,
    // {provide: "API_URL", useClass: "localhost5200/api/v2"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
