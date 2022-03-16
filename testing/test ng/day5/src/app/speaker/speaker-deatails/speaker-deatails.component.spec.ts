import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDeatailsComponent } from './speaker-deatails.component';

describe('SpeakerDeatailsComponent', () => {
  let component: SpeakerDeatailsComponent;
  let fixture: ComponentFixture<SpeakerDeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerDeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
