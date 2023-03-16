import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblazersComponent } from './singleblazers.component';

describe('SingleblazersComponent', () => {
  let component: SingleblazersComponent;
  let fixture: ComponentFixture<SingleblazersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleblazersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleblazersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
