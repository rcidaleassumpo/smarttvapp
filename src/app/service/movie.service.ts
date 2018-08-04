import { Injectable } from '@angular/core';
import { TVProgram } from '../models/tvprogram';
import { HttpClient } from "@angular/common/http";
import { filter, map } from 'rxjs/operators';
import { TVChannel } from '../models/channel';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  filterBy(key,val){
    const data = this.http.get('assets/tvprograms.json').pipe(
      map((res: Array<TVProgram>) => 
        res.filter(res => res[key] === val)
      )
    )
    
    return data.pipe(
      map((res: TVProgram[]) => new TVChannel(res, val))
    )    
    // get the hourStart and Title of each obj in the array and create a new Object with that info.
  }
}
