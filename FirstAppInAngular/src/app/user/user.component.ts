import {Component, Input, OnChanges, OnInit, Self, SimpleChanges, SkipSelf} from "@angular/core";
import {IUser} from "../app-interface";
import {MyCompanyService} from "../my-Company.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template:`<h1>This a Test For User Component</h1>`,
  styleUrls: ['./user.component.css'],

  // styles: [`h1 {
  //     color : red;
  // }`]
  // providers:[LoggingService]
  providers: [MyCompanyService]
})
export class UserComponent implements OnInit, OnChanges {

  // private _user: IUser | undefined;
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
  // constructor(private loggingService: LoggingService) {
  // }
  // constructor(@Self() private myCompanyService: MyCompanyService) {
  // }
  // constructor(@SkipSelf() private myCompanyService: MyCompanyService) {
  // }

  selectedId: number = 0;
  selectedUser: IUser | undefined;
  user: IUser[] = [
    {
      id: 1,
      name: 'saeed'
    }, {
      id: 2,
      name: 'ahmad'
    }, {
      id: 3,
      name: 'reza'
    },]
  isUSerFound: boolean = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.user)
    // console.log(this._user)
    this.selectedId = +this.route.snapshot.params['id'];
    this.selectedUser = this.user.find(user => user.id === this.selectedId);
    if (!this.selectedUser) {
      this.isUSerFound = false;
    }
    console.log(this.selectedId);
    this.route.params.subscribe((params: Params) => {
      this.selectedUser = this.user.find(user => user.id === +params['id']);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this._user = this.user;
    // this.counter++;
  }

  log() {
    // console.log('log in Child User Console');
    // console.log(this.loggingService.title);
    // this.loggingService.log('log in Child User Console');
  }
}
