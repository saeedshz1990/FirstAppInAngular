import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  OnInit, Optional,
  QueryList,
  Renderer2,
  ViewChild, ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {MyCompanyService} from "./my-Company.service";
import {concatMap, delay, exhaustMap, filter, from, fromEvent, map, mergeMap, of, take, takeWhile, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {mockData} from "../helpers/mockData";
import {User} from "./models/app-model";
import {jsonHelpUsage} from "@angular/cli/src/command-builder/utilities/json-help";
import {UsersService} from "./servises/users.service";
// import {map, Observable, shareReplay} from "rxjs";
// import {Todo} from "./models/model"
// import {valueOf} from "zone.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
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
  // users: AppInterface[] = [];
  // htmlTest = '<img src=xxx onerror="alert(\"XSS Attack"\)">';
  // @ViewChild('par', {static: true, read: ElementRef}) par: ElementRef;
  // @ViewChild(IncComponent, {static: true, read: IncComponent})
  // color: string = 'red';
  // images: string[]=['./assets/2-food.jpg','./assets/Untitled-1-18.jpg',
  //                   './assets/Untitled-3-3.jpg','./assets/Untitled-7-3.jpg','./assets/26.yek4nptgmsetw16cd4j6.jpg']
  // incComp!: IncComponent;
  //
  // @ViewChildren(IncComponent, {read: IncComponent})
  // incComps!: QueryList<IncComponent>;
  // @ts-ignore
  // @ViewChild('par', {static: true, read: ElementRef}) par: ElementRef;
  // user: IUser = {
  //   name: 'Saeed',
  //   age: 28
  // }
  // users: IUser[] = [
  //   {
  //     name: 'Saeed',
  //     age: 28
  //   },
  //   {
  //     name: 'Saeed',
  //     age: 28
  //   },
  //   {
  //     name: 'Saeed',
  //     age: 28
  //   },
  //   {
  //     name: 'Saeed',
  //     age: 28
  //   },
  //   {
  //     name: 'Saeed',
  //     age: 28
  //   }
  // ];

  // constructor(private renderer: Renderer2) {
  // }
  // constructor(@Inject(MYCOMPANY_SERVICE_TOKEN) private myCompanyService: MyCompanyService) {
  // }
  // constructor(@Inject(DEVICE_NAME_TOKEN) private deviceName: string) {
  //   console.log(deviceName);
  // }
  constructor(@Optional() private myCompanyService: MyCompanyService,
              private http: HttpClient, private userServices: UsersService) {
  }

//   constructor( )
// {
// }
  // onSelectedChanged(user: IUser) {
  //   console.log(user)
  // }
  // http$: Observable<Todo[]>;
  // doneTask$: Observable<Todo[]>;
  // undoneTask$: Observable<Todo[]>;
  // @ts-ignore
  @ViewChild('input', {static: true}) input: ElementRef;
  // @ts-ignore
  @ViewChild('editButton',{static : true}) editButton: ElementRef;
  user: User[] = [
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },
    {
      name: 'saeed',
      age: 32,
      status: 'active'
    },

  ];

  ngOnInit() {
    // console.log(this.user);
    // this.style = {
    //   'font-size': this.isCorrect ? '2rem' : '9rem',
    //   'color': 'red',
    // }
    //
    // this.classes = {
    //   'big-font-size': this.isModified,
    //   'cancelled-color': this.isCancelled
    // }

    // this.par.nativeElement.style.color = 'blue'; //it's Wrong because XSS Attack is Activated
    // this.par.nativeElement.innerHTML = this.htmlTest;
    // this.renderer.setStyle(this.par.nativeElement, 'color', 'purple');
    // this.par.nativeElement.innerHTML = '123345452345';
    // console.log(this.incComp);
    // this.incComp.increment();
    // this.http$ = new Observable((observer) => {
    //   fetch('http://jsonplaceholder.typicode.com/todos/')
    //     .then((response) => {
    //       // console.log(response);
    //       return response.json();
    //     }).then((body) => {
    //     // console.log(body);
    //     observer.next(body);
    //     observer.complete();
    //   }).catch((err) => {
    //     // console.log(err);
    //     observer.error(err);
    //   })
    // });

    // this.http$.subscribe((val) => {
    //   this.doneTask = val.filter(Todo === true);
    //   this.undoneTask = val.filter(Todo === false);

    // this.http$ = this.http$.pipe(
    //   shareReplay()
    // );
    //
    // this.doneTask$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === true))
    // );
    // this.undoneTask$ = this.http$.pipe(
    //   map((todo) => todo.filter((todo) => todo.completed === false))
    // );
    // });
    // debugger;
    // fetch('http://jsonplaceholder.typicode.com/todos/')
    //   .then((response) => {
    //     // console.log(response);
    //     return response.json();
    //   }).then((body) => {
    //   console.log(body);
    // }).catch((error) => {
    //   console.log(error);
    // })
    // from(this.user).pipe(
    //   // filter(user => user.age < 25)
    //   filter(user => user.status === 'active')
    // ).subscribe(console.log);
    // of(1, 2, 3, 4, 5, 6, 7, 8, 9)
    //   .subscribe(val => {
    //     let body = JSON.stringify({
    //       body: 'test Body',
    //       title: 'test Title'
    //     });
    //     let headers = new HttpHeaders({
    //       'Content-Type': 'application/json;charset = UTF-8'
    //     });
    //     let option = {headers: headers}
    //     this.http.patch(`http://jsonplaceholder.typicode.com/posts/${val}`, body, option).subscribe(console.log)
    //   });
    // fromEvent(this.input.nativeElement, 'input').pipe(
    //   // tap(i => console.log(i)),
    //   map(event => event as InputEvent),
    //   map(item => (item.target as HTMLInputElement).value),
    //   concatMap(item => this.userServices.patchBodyPost(item)),//جهت سرچ کردن قابل استفاده می باشد
    //   tap(i => console.log(i)),
    // ).subscribe();
    of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      mergeMap((val) => this.pathMultiplePosts(val)),
      tap(i => console.log(i))
    ).subscribe();
    fromEvent(this.editButton.nativeElement, 'click').pipe(
      tap(() => console.log('clicked')),
      exhaustMap(() => this.patchSinglePost()),
      tap(i => console.log(i))
    ).subscribe();
  }

  // fromEvent(document, 'click').pipe(
  //   map(event => event as MouseEvent),
  //   tap(i => console.log(i)),
  //   map(item => {
  //     return {
  //       x: item.offsetX,
  //       y: item.offsetY
  //     }
  //   }),
  //   // take(6),
  //   takeWhile(item => item.x < 1000),
  //   tap(i => console.log(i)),
  // ).subscribe(console.log)
  // // fromEvent(document,'click').subscribe(console.log)
  // fromEvent(this.input.nativeElement, 'click').subscribe(console.log)
  // of(mockData).subscribe(console.log);
  // this.http.get('src/app/models/mockData.json').subscribe(console.log);
  // of(['name1', 'name2', 'name3', 'name4', 'name5']).subscribe(console.log);
  // of('name1', 'name2', 'name3', 'name4', 'name5').subscribe(console.log);
  // from(['name1', 'name2', 'name3', 'name4', 'name5']).subscribe(console.log);
  public pathMultiplePosts(postId: number) {
    let body = JSON.stringify({
      body: "Test123",
      title: "Title123"
    });
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset = UTF-8'
    });
    let option = {headers: headers}
    return this.http.patch(`http://jsonplaceholder.typicode.com/posts/${postId}`, body, option);
  }

  public patchSinglePost() {
    let body = JSON.stringify({
      body: "Test123",
      title: "Title123"
    });
    let headers = new HttpHeaders({
      'Content-Type': 'application/json;charset = UTF-8'
    });
    let option = {headers: headers}
    return this.http.patch(`http://jsonplaceholder.typicode.com/posts/1`, body, option)
      .pipe(
        delay(2000)
      );
  }

  public changeBodyPost(val: string) {

  }

  ngAfterViewInit()
    :
    void {
    // this.incComps.forEach((comp) => {
    //   comp.increment();
    // });

  }

  onContentChange() {
    // this.par.nativeElement.innerHTML = '123456';
  }

// userAdded(users: AppInterface[]) {
//   this.users = users;
// }

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

// onClick(val: HTMLInputElement) {
//   alert(val);
//   alert(val.value);
// }


}
