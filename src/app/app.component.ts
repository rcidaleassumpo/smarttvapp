import { Component, OnInit, Input } from '@angular/core';
import { TVChannel } from './models/channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  message:TVChannel[]
  constructor(){
    
  }

  ngOnInit(){
    
  }

  receiveMessage($event) {
    this.message = $event
  }
  
}

