import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfoConfComponent } from './page-info-conf.component';

describe('PageInfoConfComponent', () => {
  let component: PageInfoConfComponent;
  let fixture: ComponentFixture<PageInfoConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInfoConfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInfoConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
