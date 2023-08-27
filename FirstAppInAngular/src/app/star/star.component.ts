import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
//child Component
  @Input('starRating') rating: number = 4;
  @Output('starEventEmitter') starClicked = new EventEmitter<number>();
  width: number = 90;

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

  onClick() {
    this.starClicked.emit(this.rating);
  }

}
