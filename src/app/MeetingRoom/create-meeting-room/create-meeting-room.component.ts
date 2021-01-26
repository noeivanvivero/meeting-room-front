import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoom } from 'src/app/Model/MeetingRoom';
import { MeetingRoomService } from 'src/app/Service/meeting-room-service.service';

@Component({
  selector: 'app-create-meeting-room',
  templateUrl: './create-meeting-room.component.html',
  styleUrls: ['./create-meeting-room.component.css']
})
export class CreateMeetingRoomComponent implements OnInit {
  
  constructor(private router:Router, private service:MeetingRoomService) { }
  public room = new MeetingRoom();
  
  ngOnInit(): void {
    
  }
  createMeetingRoom(){
    this.service.createMeetingRoom(this.room).subscribe(response=>{
      
      alert("Successfully added new meeting room");
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

  cancelCreation(){
    this.router.navigate(["getallmeetingrooms"]);
  }

}
