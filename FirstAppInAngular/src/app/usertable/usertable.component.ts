import {Component, Input, OnInit} from '@angular/core';
import {AppInterface} from "../app-interface";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit{
  @Input() users: AppInterface[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }
}
