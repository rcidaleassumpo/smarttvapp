import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  tomorrow:number = new Date().getDate()+1
  today:number = new Date().getDate()
  @Output() eventClicked = new EventEmitter();

  constructor() { }
  
  ngOnInit() {
    this.setTodayDate()
  }

  setTodayDate(){
    this.eventClicked.emit(this.today)
  }
  setTomorrowDate() {
    this.eventClicked.emit(this.tomorrow);
  }

}
