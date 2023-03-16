import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglesherwaniComponent } from './singlesherwani.component';

describe('SinglesherwaniComponent', () => {
  let component: SinglesherwaniComponent;
  let fixture: ComponentFixture<SinglesherwaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglesherwaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglesherwaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
