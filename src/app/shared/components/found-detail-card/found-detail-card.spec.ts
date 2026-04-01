import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundDetailCard } from './found-detail-card';

describe('FoundDetailCard', () => {
  let component: FoundDetailCard;
  let fixture: ComponentFixture<FoundDetailCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundDetailCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundDetailCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
