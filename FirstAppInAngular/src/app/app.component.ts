import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string = 'Saeed';
  isEnabled: boolean = false;
  userName: string = '';
  password: string = '';
  retypePassword: string = '';
  isPasswordMatch: boolean = false;
  isCorrect: boolean = true;
  isModified: boolean = false;
  isCancelled: boolean = true;
  style = {};
  classes = {};

  ngOnInit(): void {
    this.style = {
      'font-size': this.isCorrect ? '2rem' : '9rem',
      'color': 'red',
    }

    this.classes = {
      'big-font-size': this.isModified,
      'cancelled-color': this.isCancelled
    }
  }

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
