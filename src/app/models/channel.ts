import {TVProgram} from './tvprogram'

export class TVChannel {

    channel: string;
    title: string[];
    hourStart: string[]
    constructor(public channels: TVProgram[], public channelName:string){
        this.hourStart = channels.map(item => item['hourStart'])
        this.title = channels.map(item => item['title'])
        this.channel = channelName 
    }
}