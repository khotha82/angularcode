import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtestComponent } from './switchtest.component';

describe('SwitchtestComponent', () => {
  let component: SwitchtestComponent;
  let fixture: ComponentFixture<SwitchtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
