import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherwaniComponent } from './sherwani.component';

describe('SherwaniComponent', () => {
  let component: SherwaniComponent;
  let fixture: ComponentFixture<SherwaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SherwaniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SherwaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
