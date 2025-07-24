import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myfeedback } from './myfeedback';

describe('Myfeedback', () => {
  let component: Myfeedback;
  let fixture: ComponentFixture<Myfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
