import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareesComponent } from './sarees.component';

describe('SareesComponent', () => {
  let component: SareesComponent;
  let fixture: ComponentFixture<SareesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SareesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SareesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
