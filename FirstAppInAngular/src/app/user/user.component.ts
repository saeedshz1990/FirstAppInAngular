import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {IUser} from "../app-interface";
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template:`<h1>This a Test For User Component</h1>`,
  styleUrls: ['./user.component.css'],
  // styles: [`h1 {
  //     color : red;
  // }`]
  // providers:[LoggingService]
})
export class UserComponent implements OnInit,OnChanges {

  private _user: IUser | undefined;

  // @Input()
  // set(user: IUser) {
  //   this._user = user;
  //   this.counter++;
  // };

  // get user(): IUser {
  //   return <IUser>this._user;
  // }
  //
  // counter: number = 0;

  constructor(private loggingService: LoggingService) {
  }

  ngOnInit(): void {
    // console.log(this.user)
    // console.log(this._user)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this._user = this.user;
    // this.counter++;
  }
  log(){
    // console.log('log in Child User Console');
    console.log(this.loggingService.title);
    this.loggingService.log('log in Child User Console');
  }
}
