export class Listing {
    title:string;
    hourStart:any;
    constructor(public _title:string,public _hourStart:any){
        this.title = _title;
        this.hourStart = _hourStart.slice(11,-1)
    }
}