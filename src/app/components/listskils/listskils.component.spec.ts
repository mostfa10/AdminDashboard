import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListskilsComponent } from './listskils.component';

describe('ListskilsComponent', () => {
  let component: ListskilsComponent;
  let fixture: ComponentFixture<ListskilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListskilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListskilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
