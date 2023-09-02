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
  constructor(@Optional() private myCompanyService: MyCompanyService) {
  }

  // onSelectedChanged(user: IUser) {
  //   console.log(user)
  // }

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
  }

  ngAfterViewInit(): void {
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
