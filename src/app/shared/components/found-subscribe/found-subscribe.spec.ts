import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundSubscribe } from './found-subscribe';

describe('FoundSubscribe', () => {
  let component: FoundSubscribe;
  let fixture: ComponentFixture<FoundSubscribe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundSubscribe],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundSubscribe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
