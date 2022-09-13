import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBraComponent } from './add-bra.component';

describe('AddBraComponent', () => {
  let component: AddBraComponent;
  let fixture: ComponentFixture<AddBraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
