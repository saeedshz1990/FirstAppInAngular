import {Component, Inject, OnInit} from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [LoggingService]
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) {
  }

  // constructor(private loggingService: LoggingService, @Inject('API_URL') url: string) {
  // }

  ngOnInit(): void {
  }

  onChange(e: Event) {
    this.loggingService.title = (e.target as HTMLInputElement).value;
  }

  log() {
    // console.log('log in home Console');
    console.log(this.loggingService.title);
    this.loggingService.log('log in home Console');
  }

}
