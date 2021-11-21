import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormContactComponent } from './card-form-contact.component';

describe('CardFormContactComponent', () => {
  let component: CardFormContactComponent;
  let fixture: ComponentFixture<CardFormContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
