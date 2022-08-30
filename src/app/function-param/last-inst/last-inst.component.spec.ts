import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastInstComponent } from './last-inst.component';

describe('LastInstComponent', () => {
  let component: LastInstComponent;
  let fixture: ComponentFixture<LastInstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastInstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastInstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
