import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/Model/Reservation';
import { ReservationService } from 'src/app/Service/reservation.service';

@Component({
  selector: 'app-get-free-room-reservations',
  templateUrl: './get-free-room-reservations.component.html',
  styleUrls: ['./get-free-room-reservations.component.css']
})
export class GetFreeRoomReservationsComponent implements OnInit {

  constructor(private service:ReservationService, private router:Router) { }
  public reservations:Reservation[];

  ngOnInit(): void {
    let roomId = localStorage.getItem("roomId");
    if(roomId){
      this.service.getAllReservationsForRoomAfterToday(+roomId).subscribe(result=>{this.reservations=result;},error=>{
        alert("Unexpected condition while retriving the data you will be redirected");
        this.router.navigate(["getallmeetingrooms"]);
      })
    }
    else{
      this.service.getAllReservations().subscribe(result=>{this.reservations=result;},error=>{
        alert("Unexpected condition while retriving the data you will be redirected");
        this.router.navigate(["getallmeetingrooms"]);
      });
    }
  }
  updateReservation(reservation:Reservation){
    localStorage.setItem("reservationId",reservation.id.toString());
    this.router.navigate(["editreservation"]);
  }
  createReservation(){
    this.router.navigate(["createreservation"]);
  }
 
  returnToMeetingRooms(){
    this.router.navigate(["getallmeetingrooms"]);
  }
}
