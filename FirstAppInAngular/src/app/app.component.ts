import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Saeed';
  isEnabled: boolean = false;
  userName: string = '';
  password: string = '';
  retypePassword: string = '';
  isPasswordMatch: boolean = false;

  OnInpitChange(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
    console.table(this.name);
  }

  onUserNameInputChanged(e: Event) {
    this.userName = (<HTMLInputElement>e.target).value;
    console.log(this.userName);
  }

  onPasswordInputChanged(e: Event) {
    this.password = (<HTMLInputElement>e.target).value;
  }

  onRetypePasswordInputChanged(e: Event) {
    this.retypePassword = (<HTMLInputElement>e.target).value;

    // this.isPasswordMatch = this.password !== this.retypePassword ? false : true;

    if (this.password !== this.retypePassword) {
      this.isPasswordMatch = false;
    } else {
      this.isPasswordMatch = true;
    }
  }
}
