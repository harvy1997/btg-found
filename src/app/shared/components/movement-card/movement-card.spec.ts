import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementCard } from './movement-card';

describe('MovementCard', () => {
  let component: MovementCard;
  let fixture: ComponentFixture<MovementCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovementCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MovementCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
