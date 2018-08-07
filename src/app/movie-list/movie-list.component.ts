import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MovieService } from '../service/movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  today:number = new Date().getDate()
  month:number = new Date().getMonth()
  year:number = new Date().getFullYear()
  calendarOfDays:number[] =  this.getDaysInMonth(this.month,this.year)
  todaysIndex:number = this.calendarOfDays.indexOf(this.today)
  @Input() channels;
  constructor(private movieService:MovieService ) { }
  
  ngOnInit() {
    this.getChannels(this.today)
  }

  getChannels(date){

    //let channels = ['HBOPLUS', 'HBO','HBOFamily','Telecine']
    this.movieService.getChannels(date)
      .subscribe((res) => this.channels = res)
      
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
