import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppInterface} from "../app-interface";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users: AppInterface[] = [{
    email: 'a@a.com',
    password: '12345',
    address: 'NasrBlvd'
  },
    {
      email: 'a@b.com',
      password: '123456',
      address: 'AzadiBlvd'
    },
    {
      email: 'a@c.com',
      password: '123457',
      address: 'EdalatBlvd'
    }];

  constructor() {
  }

  @Output() onAddUserClicked = new EventEmitter<AppInterface[]>();

  onAddNewUser(email: string, password: string, address: string, e: Event) {

    e.preventDefault();
    let u: AppInterface = {
      email: email,
      address: address,
      password: password
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users)
  }

  ngOnInit(): void {
  }
}
