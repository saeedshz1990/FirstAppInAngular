import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef, Input, OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';
import {LoggingService} from "../logging.service";
import {MyCompanyService} from "../my-Company.service";

@Component({
  selector: '[app-users]',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MyCompanyService]
  // providers: [LoggingService]
  // viewProviders: [LoggingService]
})
export class UsersComponent implements OnInit,
  AfterContentInit, AfterContentChecked, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy {
//   @ViewChild('par2', {static: true})
//   par2!: ElementRef;
//   @ContentChild('par', {static: true})
//   par!: ElementRef;
// // @ts-ignore
//   @Input() var1;

  // constructor(private loggingService: LoggingService) {
  // }
  constructor(private myCompanyService: MyCompanyService) {
  }

  ngOnInit(): void {
    // console.log("Ng On Init" + this.par.nativeElement.textContent)
    // console.log("ngOnInit Called")
  }

  ngAfterContentChecked(): void {
    // console.log("Ng AfterContentChecked" + this.par.nativeElement.textContent)
    // console.log("ngAfterContentChecked Called")
    // this.loggingService.log('log in Userss Console');
  }

  ngAfterContentInit(): void {
    // console.log("Ng AfterContentInit" + this.par.nativeElement.textContent)
    // console.log("ngAfterContentInit Called")

  }

  ngAfterViewChecked(): void {
    // console.log("ngAfterViewChecked Called")

  }

  ngAfterViewInit(): void {
    // console.log("ngAfterViewInit Called")

  }

  ngDoCheck(): void {
    // console.log("ngDoCheck Called")

  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges Called")

  }

  ngOnDestroy(): void {
    // console.log("ngOnDestroy Called")

  }

  onChangeViewChild() {
    // this.par2.nativeElement.innerHTML="View Child Changed"
  }

  log() {
    // console.log(this.loggingService.title);
    // console.log('log in Users Console');
  }
}
