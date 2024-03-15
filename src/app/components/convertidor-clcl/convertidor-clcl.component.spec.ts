import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorClclComponent } from './convertidor-clcl.component';

describe('ConvertidorClclComponent', () => {
  let component: ConvertidorClclComponent;
  let fixture: ComponentFixture<ConvertidorClclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorClclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorClclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
