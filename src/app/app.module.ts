import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllMeetingRoomsComponent } from './MeetingRoom/get-all-meeting-rooms/get-all-meeting-rooms.component';
import { CreateMeetingRoomComponent } from './MeetingRoom/create-meeting-room/create-meeting-room.component';
import { EditMeetingRoomComponent } from './MeetingRoom/edit-meeting-room/edit-meeting-room.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MeetingRoomService } from "../app/Service/meeting-room-service.service";
import { from } from 'rxjs';
import { GetAllReservationsComponent } from './Reservation/get-all-reservations/get-all-reservations.component';
import { CreateReservationComponent } from './Reservation/create-reservation/create-reservation.component';
import { EditReservationComponent } from './Reservation/edit-reservation/edit-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetFreeRoomReservationsComponent } from './Reservation/get-free-room-reservations/get-free-room-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    GetAllMeetingRoomsComponent,
    CreateMeetingRoomComponent,
    EditMeetingRoomComponent,
    GetAllReservationsComponent,
    CreateReservationComponent,
    EditReservationComponent,
    GetAllReservationsComponent,
    EditReservationComponent,
    CreateReservationComponent,
    GetFreeRoomReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
