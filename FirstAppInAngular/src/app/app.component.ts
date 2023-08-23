import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Saeed';
  isEnabled: boolean = false;


  OnInpitChange(e: Event) {
    this.name = (<HTMLInputElement>e.target).value;
    console.table(this.name);
  }
}
