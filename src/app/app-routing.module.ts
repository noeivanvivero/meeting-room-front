import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMeetingRoomComponent } from './MeetingRoom/create-meeting-room/create-meeting-room.component';
import { EditMeetingRoomComponent } from './MeetingRoom/edit-meeting-room/edit-meeting-room.component';
import { GetAllMeetingRoomsComponent } from './MeetingRoom/get-all-meeting-rooms/get-all-meeting-rooms.component';
import { CreateReservationComponent } from './Reservation/create-reservation/create-reservation.component';
import { EditReservationComponent } from './Reservation/edit-reservation/edit-reservation.component';
import { GetAllReservationsComponent } from './Reservation/get-all-reservations/get-all-reservations.component';
import { GetFreeRoomReservationsComponent } from './Reservation/get-free-room-reservations/get-free-room-reservations.component';

const routes: Routes = [
  {path:"getallmeetingrooms",component:GetAllMeetingRoomsComponent},
  {path:"createmeetingroom",component:CreateMeetingRoomComponent},
  {path:"editmeetingroom",component:EditMeetingRoomComponent},
  {path:"getallreservations",component:GetAllReservationsComponent},
  {path:"createreservation",component:CreateReservationComponent},
  {path:"editreservation",component:EditReservationComponent},
  {path:"freeroomreservations",component:GetFreeRoomReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
