import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public clickedEvent: number;

  constructor(private service: DataService){
    
  }

  ngOnInit(){
  }

  childEventClicked(date: number) {
    this.clickedEvent = date;
  }
  
}

