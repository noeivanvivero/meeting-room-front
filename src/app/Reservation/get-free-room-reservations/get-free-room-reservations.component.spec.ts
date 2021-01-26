import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFreeRoomReservationsComponent } from './get-free-room-reservations.component';

describe('GetFreeRoomReservationsComponent', () => {
  let component: GetFreeRoomReservationsComponent;
  let fixture: ComponentFixture<GetFreeRoomReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFreeRoomReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFreeRoomReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
