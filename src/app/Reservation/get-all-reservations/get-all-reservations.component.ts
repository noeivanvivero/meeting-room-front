import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/Model/Reservation';
import { ReservationService } from 'src/app/Service/reservation.service';

@Component({
  selector: 'app-get-all-reservations',
  templateUrl: './get-all-reservations.component.html',
  styleUrls: ['./get-all-reservations.component.css']
})
export class GetAllReservationsComponent implements OnInit {

  constructor(private service:ReservationService, private router:Router) { }
  public reservations:Reservation[];

  ngOnInit(): void {
    let roomId = localStorage.getItem("roomId");
    if(roomId){
      this.service.getAllReservationsForRoom(+roomId).subscribe(result=>{this.reservations=result;})
    }
    else{
      this.service.getAllReservations().subscribe(result=>{this.reservations=result;});
    }
  }
  updateReservation(reservation:Reservation){
    localStorage.setItem("reservationId",reservation.id.toString());
    this.router.navigate(["editreservation"]);
  }
  createReservation(){
    this.router.navigate(["createreservation"]);
  }
  deleteReservation(reservation:Reservation){
    this.service.deleteReservation(reservation).subscribe(result=>{
      this.reservations=this.reservations.filter(element=>element!==reservation);
    },error=>{
      alert("Unexpected condition while processing the request");
    });
  }
  returnToMeetingRooms(){
    this.router.navigate(["getallmeetingrooms"]);
  }

}
