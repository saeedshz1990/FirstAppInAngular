import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit, AfterContentChecked {
  @ContentChild('par', {static: true})
  par!: ElementRef;


  ngOnInit(): void {
    console.log("Ng On Init" + this.par.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log("Ng AfterContentChecked" + this.par.nativeElement.textContent)

  }

  ngAfterContentInit(): void {
    console.log("Ng AfterContentInit" + this.par.nativeElement.textContent)

  }
}
