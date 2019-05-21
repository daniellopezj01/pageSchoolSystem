import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfelcomComponent } from './infelcom.component';

describe('InfelcomComponent', () => {
  let component: InfelcomComponent;
  let fixture: ComponentFixture<InfelcomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfelcomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfelcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
