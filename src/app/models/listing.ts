export class Listing {
    title:string;
    hourStart:string;
    constructor(public _title:string,public _hourStart:string){
        this.title = _title;
        this.hourStart = _hourStart
    }
}