import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styleUrls: ['./inc.component.css']
})
export class IncComponent implements OnInit {

  private add: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.add++;
  }
}
