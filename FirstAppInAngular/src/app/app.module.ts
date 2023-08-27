import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import { UsersComponent } from './users/users.component';
import {FormsModule} from "@angular/forms";
import { SwitchCase1Component } from './switch-case1/switch-case1.component';
import { SwitchCase2Component } from './switch-case2/switch-case2.component';
import { SwitchCase3Component } from './switch-case3/switch-case3.component';
import { SwitchCase4Component } from './switch-case4/switch-case4.component';
import { StarComponent } from './star/star.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UsertableComponent } from './usertable/usertable.component';

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
    UsertableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
