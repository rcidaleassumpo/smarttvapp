import {TVProgram} from './tvprogram'
import { Listing } from "./listing";

export class TVChannel {

    channel: string;
    listingsOfChannel:Listing[]
    constructor(public channels: TVProgram[], public channelName:string){
        this.listingsOfChannel = channels.map((item:TVProgram) => 
            new Listing(item['title'], item['date']))
        this.listingsOfChannel.sort((a,b) => +new Date(b.hourStart) - +new Date(a.hourStart))
        this.channel = channelName 
    }
}
