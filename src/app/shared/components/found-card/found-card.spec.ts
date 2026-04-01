import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundCard } from './found-card';

describe('FoundCard', () => {
  let component: FoundCard;
  let fixture: ComponentFixture<FoundCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
