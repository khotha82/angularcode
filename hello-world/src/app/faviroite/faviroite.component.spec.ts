import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviroiteComponent } from './faviroite.component';

describe('FaviroiteComponent', () => {
  let component: FaviroiteComponent;
  let fixture: ComponentFixture<FaviroiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaviroiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
