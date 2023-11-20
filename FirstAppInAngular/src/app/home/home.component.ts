import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {count, interval, Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [LoggingService]
})
export class HomeComponent implements OnInit, OnDestroy {

  // constructor(private loggingService: LoggingService) {
  // }

  // constructor(private loggingService: LoggingService, @Inject('API_URL') url: string) {
  // }
  // isLoggedIn:boolean=false;
  // constructor(private router: Router,private authservice:AuthService) {
  // }
  constructor() {
  }

  // @ts-ignore
  public intervalSubscription: Subscription;

  ngOnInit(): void {
    interval(1000);
    // document.addEventListener('click', (event) => {
    //   console.log(event)
    // })


    const interval$ = new Observable((observer: Observer<number>) => {
      // observer.next(1);
      // observer.next(2);
      // observer.next(3);
      // observer.error(new Error('Error in App !!!!'));
      let conter: number = 0;
      setInterval(() => {
        observer.next(conter++)
        if (conter === 5) {
          // observer.error(new Error('We Reached 5 !!!!'))
          observer.complete();
        }
      }, 10000);

    });
    this.intervalSubscription = interval$.subscribe(
      (val) => {
        console.log(val);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Completed!!!');
      }
    );
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  // onChange(e: Event) {
  //   this.loggingService.title = (e.target as HTMLInputElement).value;
  // }
  //
  // log() {
  //   // console.log('log in home Console');
  //   console.log(this.loggingService.title);
  //   this.loggingService.log('log in home Console');
  // }

//   onUserRedirect(){
// this.router.navigate(['/users']);
//   }
//   login(){
//     this.authservice.login();
//   }
//
// logout(){
//     this.authservice.logout();
// }
}
