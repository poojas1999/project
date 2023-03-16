import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazersComponent } from './blazers.component';

describe('BlazersComponent', () => {
  let component: BlazersComponent;
  let fixture: ComponentFixture<BlazersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlazersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
