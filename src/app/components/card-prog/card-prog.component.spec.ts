import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgComponent } from './card-prog.component';

describe('CardProgComponent', () => {
  let component: CardProgComponent;
  let fixture: ComponentFixture<CardProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
