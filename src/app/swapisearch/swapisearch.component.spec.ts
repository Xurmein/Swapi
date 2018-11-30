import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapisearchComponent } from './swapisearch.component';

describe('SwapisearchComponent', () => {
  let component: SwapisearchComponent;
  let fixture: ComponentFixture<SwapisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
