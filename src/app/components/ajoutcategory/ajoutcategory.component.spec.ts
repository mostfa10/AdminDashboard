import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcategoryComponent } from './ajoutcategory.component';

describe('AjoutcategoryComponent', () => {
  let component: AjoutcategoryComponent;
  let fixture: ComponentFixture<AjoutcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
