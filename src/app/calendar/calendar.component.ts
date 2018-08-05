import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service'
import { TVChannel } from '../models/channel';

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
  @Output() messageEvent = new EventEmitter();


  constructor(private movieService: MovieService) { }
  
  ngOnInit() {
    this.getChannels(this.today)
  }

  getChannels(day){
    let channels = ['HBOPLUS', 'HBO','HBOFamily','Telecine']
    let holder:TVChannel[] = []
    for(let channel of channels){
      this.movieService.filterBy('channel',channel,day)
      .subscribe(function(res){
        holder.push(res)
      })
    }
    this.messageEvent.emit(holder)
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
