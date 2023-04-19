import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsubcComponent } from './newsubc.component';

describe('NewsubcComponent', () => {
  let component: NewsubcComponent;
  let fixture: ComponentFixture<NewsubcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsubcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsubcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
