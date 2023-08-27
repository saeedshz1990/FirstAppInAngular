import {Component, OnInit} from '@angular/core';
import {AppInterface} from "./app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // name: string = 'Saeed';
  // isEnabled: boolean = false;
  // userName: string = '';
  // password: string = '';
  // retypePassword: string = '';
  // isPasswordMatch: boolean = false;
  // isCorrect: boolean = true;
  // isModified: boolean = false;
  // isCancelled: boolean = true;
  // style = {};
  // classes = {};
  // switchProperty: string = 'a';
  // ratings: number[] = [3, 3.5, 5, 4.5, 4];
  //
  // users: string[] = ['fatemeh', 'negar', 'maryam', 'zahra']
  // userObj: any = [
  //   {
  //     id: 1,
  //     name: 'Fatemeh'
  //   },
  //   {
  //     id: 2,
  //     name: 'Negar'
  //   },
  //   {
  //     id: 3,
  //     name: 'Zahra'
  //   },
  //   {
  //     id: 4,
  //     name: 'Maryam'
  //   },
  //   {
  //     id: 5,
  //     name: 'Ladan'
  //   },
  //   {
  //     id: 6,
  //     name: 'Ladan'
  //   },
  // ]
  users: AppInterface[] = [];

  ngOnInit() {
    // this.style = {
    //   'font-size': this.isCorrect ? '2rem' : '9rem',
    //   'color': 'red',
    // }
    //
    // this.classes = {
    //   'big-font-size': this.isModified,
    //   'cancelled-color': this.isCancelled
    // }
  }

  userAdded(users: AppInterface[]) {
this.users=users;
  }

  // OnInpitChange(e
  //                 :
  //                 Event
  // ) {
  //   this.name = (<HTMLInputElement>e.target).value;
  //   console.table(this.name);
  // }
  //
  // onUserNameInputChanged(e
  //                          :
  //                          Event
  // ) {
  //   this.userName = (<HTMLInputElement>e.target).value;
  //   console.log(this.userName);
  // }
  //
  // onPasswordInputChanged(e
  //                          :
  //                          Event
  // ) {
  //   this.password = (<HTMLInputElement>e.target).value;
  // }

//   onStartClicked(rating: number) {
// console.log(`The Rating ${rating} Is Clicked`);
//   }

  // onRetypePasswordInputChanged(e
  //                                :
  //                                Event
  // ) {
  //   this.retypePassword = (<HTMLInputElement>e.target).value;
  //
  //   // this.isPasswordMatch = this.password !== this.retypePassword ? false : true;
  //
  //   if (this.password !== this.retypePassword) {
  //     this.isPasswordMatch = false;
  //   } else {
  //     this.isPasswordMatch = true;
  //   }
  // }
  //
  // addNewUser() {
  //   this.userObj = [
  //     {
  //       id: 11,
  //       name: 'Fatemeh'
  //     },
  //     {
  //       id: 12,
  //       name: 'Negar'
  //     },
  //     {
  //       id: 13,
  //       name: 'Zahra'
  //     },
  //     {
  //       id: 14,
  //       name: 'Maryam'
  //     },
  //     {
  //       id: 15,
  //       name: 'Ladan'
  //     },
  //     {
  //       id: 16,
  //       name: 'Ladan'
  //     },
  //     {
  //       id: 17,
  //       name: 'Fatemeh'
  //     },
  //   ]
  // }
  //
  // trackByFunc(index: number, el: any) {
  //   return el.id;
  // }
}
