import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvillesComponent } from './listvilles.component';

describe('ListvillesComponent', () => {
  let component: ListvillesComponent;
  let fixture: ComponentFixture<ListvillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvillesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
