import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoom } from 'src/app/Model/MeetingRoom';
import { Reservation } from 'src/app/Model/Reservation';
import { MeetingRoomService } from 'src/app/Service/meeting-room-service.service';
import { ReservationService } from 'src/app/Service/reservation.service';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';


@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

  public rooms: MeetingRoom[];
  public reservation = new Reservation();
  form: FormGroup;

  constructor(private router:Router, private reservationService:ReservationService, private meetingRoomService:MeetingRoomService, private formBuilder:FormBuilder) { 
    this.form = this.formBuilder.group({
      rooms: [''],
      date: ''
    });
  }
 


  ngOnInit(): void {
    this.meetingRoomService.getAllMeetingRooms().subscribe(result=>{
      this.rooms = result;
    });
    let id = localStorage.getItem("reservationId");
    if(id)
    {
      this.reservationService.getReservation(+id).subscribe(result=>{
        this.reservation = result;
        this.form.controls.rooms.patchValue(this.reservation.room.id);
        this.form.controls.rooms.disable();
        this.form.controls.date.patchValue(this.reservation.date);
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

  updateReservation(){
    this.reservation.date=this.form.controls.date.value;
    let selectedRoom = this.rooms.find(element=>element.id==this.form.controls.rooms.value);
    if(selectedRoom){
      this.reservation.room=selectedRoom;
      this.reservationService.updateReservation(this.reservation).subscribe(response=>{
        alert("Successfully updated reservation");
        this.router.navigate(["getallreservations"]);
      },error=>{
        if(error.status==422){
          alert("Sorry your request defies the reservation rules remember"+
          "\n 1. Reservations can not last more than two hours"
          +"\n 2. Reservations time-range can not interfere with other reservation"
          +"\n 3. Reservations should be made within the meeting room working hours"
          +"\n 4. Reservations should have a valid time range");
        }
        else{
          alert("Rejected request, check your petition and try again.");
        }
        
      });
    }
  }

  cancelUpdate(){
    this.router.navigate(["getallreservations"]);
  }
}
