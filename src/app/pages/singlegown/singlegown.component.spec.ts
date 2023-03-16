import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglegownComponent } from './singlegown.component';

describe('SinglegownComponent', () => {
  let component: SinglegownComponent;
  let fixture: ComponentFixture<SinglegownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglegownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglegownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
