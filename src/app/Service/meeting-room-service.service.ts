import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeetingRoom } from '../Model/MeetingRoom';
@Injectable({
  providedIn: 'root'
})
export class MeetingRoomService {

  constructor(private http:HttpClient) { }
  url= 'http://localhost:8081';
  getAllMeetingRooms(){
    return this.http.get<MeetingRoom[]>(this.url+"/meetingrooms");
  }
  getAllFreeMeetingRooms(){
    return this.http.get<MeetingRoom[]>(this.url+"/meetingrooms?currentFree=true");
  }
  createMeetingRoom(room:MeetingRoom){
    return this.http.post<MeetingRoom>(this.url+"/meetingrooms",room);
  }
  getMeetingRoom(id:number){
    return this.http.get<MeetingRoom>(this.url+"/meetingrooms/"+id);
  }
  updateMeetingRoom(room:MeetingRoom){
    return this.http.put<MeetingRoom>(this.url+"/meetingrooms/"+room.id,room);
  }
  deleteMeetingRoom(room:MeetingRoom){
    return this.http.delete<MeetingRoom>(this.url+"/meetingrooms/"+room.id);
  }


}
