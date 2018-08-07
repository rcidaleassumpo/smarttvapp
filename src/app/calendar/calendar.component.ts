import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  today:number = new Date().getDate()
  month:number = new Date().getMonth()
  year:number = new Date().getFullYear()
  calendarOfDays:number[] =  this.getDaysInMonth(this.month,this.year)
  todaysIndex:number = this.calendarOfDays.indexOf(this.today)
  calendarOnDisplay:number[] = this.calendarOfDays.slice(this.todaysIndex,this.todaysIndex+5)
  
  @Output() sendingDate = new EventEmitter();
  channels;
  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
  }

  getChannels(date){
    let _this = this
    _this.movieService.getChannels(date)
      .subscribe(function(res){
        _this.channels = res;
        _this.sendingDate.emit(_this.channels)  
      })
  }
  
  getDate(date){
    let currentDate = new Date(2018,this.month,date)
    let newDate = currentDate.toUTCString().slice(4,11)
    return newDate
  }

  getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
       days.push(new Date(date).getDate());
       date.setDate(date.getDate() + 1);
    }
    return days;
  }

}
