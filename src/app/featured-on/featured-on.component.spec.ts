import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedOnComponent } from './featured-on.component';

describe('FeaturedOnComponent', () => {
  let component: FeaturedOnComponent;
  let fixture: ComponentFixture<FeaturedOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
