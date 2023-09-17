import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CanComponentDeactivate} from "../deactivate.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, CanComponentDeactivate {

  // @ts-ignore
  @ViewChild('input') input: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.input.nativeElement.value != '') {
      return confirm('Do You Wanna save the value in x service');
    } else {
      return true;
    }
  }

}
