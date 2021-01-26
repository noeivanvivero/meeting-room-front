import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoom } from 'src/app/Model/MeetingRoom';
import { MeetingRoomService } from 'src/app/Service/meeting-room-service.service';

@Component({
  selector: 'app-edit-meeting-room',
  templateUrl: './edit-meeting-room.component.html',
  styleUrls: ['./edit-meeting-room.component.css']
})
export class EditMeetingRoomComponent implements OnInit {

  constructor(private router:Router, private service:MeetingRoomService) { }
  public room =  new MeetingRoom();
  ngOnInit(): void {
    let id = localStorage.getItem("roomId");
    if(id)
    {
      this.service.getMeetingRoom(+id).subscribe(result=>{
        this.room = result;
      },error=>{
        alert("Unexpected condition while retriving the data you will be redirected");
        this.router.navigate(["getallmeetingrooms"]);
      });
    }
    else{
      alert("Unexpected condition while navigating you will be redirected");
        this.router.navigate(["getallmeetingrooms"]);
    }
  }

  updateMeetingRoom(){
    this.service.updateMeetingRoom(this.room).subscribe(result=>{
      this.room=result;
      alert("Successfully updated meeting room");
      this.router.navigate(["getallmeetingrooms"]);
    },error=>{
      if(error.status==422){
        alert("Sorry your request defies the meeting room creation rules, remember:"
              +"\n1. You cannot create a meeting room that shares the name with another room"
              +"\n2. The meeting room available time should be a valid time range"
              +"\n3. All the data provided should be valid");
      }
      else{
        alert("Rejected request, check your petition and try again.");
      }
      
    });
  }
  cancelUpdate(){
    this.router.navigate(["getallmeetingrooms"]);
  }

}
