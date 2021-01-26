import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MeetingRoomService';
  constructor(private router:Router){}
  ngOnInit(): void {
    this.GetAllMeetingRooms()
  }

  GetAllMeetingRooms(){
    this.router.navigate(["getallmeetingrooms"]);
  }
  EditMeetingRoom(){
    this.router.navigate(["editmeetingroom"]);
  }
  CreateMeetingRoom(){
    this.router.navigate(["createmeetingroom"]);
  }
  GetAllReservations(){
    this.router.navigate(["getallreservations"]);
  }
  EditReservation(){
    this.router.navigate(["editreservation"]);
  }
  CreateReservation(){
    this.router.navigate(["createreservation"]);
  }
}
