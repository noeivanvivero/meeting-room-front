import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoom } from 'src/app/Model/MeetingRoom';
import { MeetingRoomService } from 'src/app/Service/meeting-room-service.service';

@Component({
  selector: 'app-get-all-meeting-rooms',
  templateUrl: './get-all-meeting-rooms.component.html',
  styleUrls: ['./get-all-meeting-rooms.component.css']
})
export class GetAllMeetingRoomsComponent implements OnInit {

  
  constructor(private service:MeetingRoomService, private router:Router) { }
  public allrooms:MeetingRoom[];
  public freerooms:MeetingRoom[];

  ngOnInit(): void {
    this.service.getAllMeetingRooms().subscribe(result=>{this.allrooms=result;});
    this.service.getAllFreeMeetingRooms().subscribe(result=>{this.freerooms=result;});
  }
  updateMeetingRoom(room:MeetingRoom){
    localStorage.setItem("roomId",room.id.toString());
    this.router.navigate(["editmeetingroom"]);
  }
  reserveFreeMeetingRoom(room:MeetingRoom){
    localStorage.setItem("roomId",room.id.toString());
    this.router.navigate(["freeroomreservations"]);
  }
  checkMeetingRoomReservations(room:MeetingRoom){
    localStorage.setItem("roomId",room.id.toString());
    this.router.navigate(["getallreservations"]);
  }
  deleteMeetingRoom(room:MeetingRoom){
    this.service.deleteMeetingRoom(room).subscribe(result=>{
      this.allrooms=this.allrooms.filter(element=>element.id!==room.id);
      this.freerooms=this.freerooms.filter(element=>element.id!==room.id);
    },error=>{
      alert("Unexpected condition while processing the request");
    });
  }
  createMeetingRoom(){
    this.router.navigate(["createmeetingroom"]);
  }

}
