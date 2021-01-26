import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from "../Model/Reservation"
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  url= 'http://localhost:8081/reservations';
  getAllReservations(){
    return this.http.get<Reservation[]>(this.url);
  }
  getAllReservationsForRoom(room:number){
    return this.http.get<Reservation[]>(this.url+"?roomId="+room);
  }
  getAllReservationsForRoomAfterToday(room:number){
    let today = new Date().toISOString().substring(0, 10);
    return this.http.get<Reservation[]>(this.url+"?roomId="+room+"&afterDate="+today);
  }
  createReservation(room:Reservation){
    return this.http.post<Reservation>(this.url,room);
  }
  getReservation(id:number){
    return this.http.get<Reservation>(this.url+"/"+id);
  }
  updateReservation(reservation:Reservation){
    return this.http.put<Reservation>(this.url+"/"+reservation.id,reservation);
  }
  deleteReservation(reservation:Reservation){
    return this.http.delete<Reservation>(this.url+"/"+reservation.id);
  }
}
