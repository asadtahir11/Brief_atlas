import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconParametreComponent } from './icon-parametre.component';

describe('IconParametreComponent', () => {
  let component: IconParametreComponent;
  let fixture: ComponentFixture<IconParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconParametreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
