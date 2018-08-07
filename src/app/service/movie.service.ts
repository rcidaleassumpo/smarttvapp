import { Injectable } from '@angular/core';
import { TVProgram } from '../models/tvprogram';
import { HttpClient } from "@angular/common/http";
import { filter,map } from 'rxjs/operators';
import { TVChannel } from '../models/channel';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

   
  getChannels(date){
    let _this = this
    
    let data = _this.http.get('assets/tvprograms.json').pipe(map(function(res: TVProgram[]){
      let allChannelsByName = []
      let channelsName = _this.getChannelsNames(res)
      for (let item of channelsName){
        allChannelsByName.push(res.filter((res:TVProgram) => res['channel'] === item ))
      }
      let allChannelsWithListing = _this.createArrayChannelsTimeAndDate(allChannelsByName, date)
      
      
      return allChannelsWithListing
    }))
    return data  
  }

  createArrayChannelsTimeAndDate(array, date){
    let _this = this
    let holder = []
    array.forEach(element => {
      holder.push(_this.createChannelWithListings(element))
    }); 
    for(let item of holder){
      item.listingsOfChannel = item.listingsOfChannel.filter((item) => parseInt(item._hourStart.slice(9,10)) === date)
    } 
    return holder
  }

  createChannelWithListings(arr){
    let channel = new TVChannel(arr, arr[0]['channel'])
    return channel    
  }

  getChannelsNames(data){
    let newData = []
    data.forEach(element => {
      if (newData.indexOf(element['channel'])==-1) newData.push(element['channel']);
    });
    return newData
  }


}
