import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutskilsComponent } from './ajoutskils.component';

describe('AjoutskilsComponent', () => {
  let component: AjoutskilsComponent;
  let fixture: ComponentFixture<AjoutskilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutskilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
