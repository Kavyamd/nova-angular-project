import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailibilityComponent } from './availibility.component';

describe('AvailibilityComponent', () => {
  let component: AvailibilityComponent;
  let fixture: ComponentFixture<AvailibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
