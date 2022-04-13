import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateslotsComponent } from './createslots.component';

describe('CreateslotsComponent', () => {
  let component: CreateslotsComponent;
  let fixture: ComponentFixture<CreateslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
