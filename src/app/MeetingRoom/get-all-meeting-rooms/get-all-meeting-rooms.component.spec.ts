import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllMeetingRoomsComponent } from './get-all-meeting-rooms.component';

describe('GetAllMeetingRoomsComponent', () => {
  let component: GetAllMeetingRoomsComponent;
  let fixture: ComponentFixture<GetAllMeetingRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllMeetingRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllMeetingRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
