import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateshopComponent } from './createshop.component';

describe('CreateshopComponent', () => {
  let component: CreateshopComponent;
  let fixture: ComponentFixture<CreateshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
