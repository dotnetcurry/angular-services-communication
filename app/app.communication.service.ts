import { Injectable,EventEmitter} from "@angular/core";
@Injectable()
export class CommunicationService {
    // 1
    id:number;

    receivedFilter:EventEmitter<number>;
    constructor() {
        this.receivedFilter= new EventEmitter<number>();
    }
    // 2
    raiseEvent(id:number):void {
        this.id = id;
        this.receivedFilter.emit(id);
    }
}