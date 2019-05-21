import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimiComponent } from './gimi.component';

describe('GimiComponent', () => {
  let component: GimiComponent;
  let fixture: ComponentFixture<GimiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
