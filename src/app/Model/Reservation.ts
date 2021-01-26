import { Time } from "@angular/common";
import { MeetingRoom } from "./MeetingRoom";

export class Reservation{
    id:number;
    date:Date;
    reservedFrom:Time;
    reservedUntil:Time;
    reservedFor:String;
    room:MeetingRoom
}