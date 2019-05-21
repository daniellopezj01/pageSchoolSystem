import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelematicsComponent } from './telematics.component';

describe('TelematicsComponent', () => {
  let component: TelematicsComponent;
  let fixture: ComponentFixture<TelematicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelematicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
