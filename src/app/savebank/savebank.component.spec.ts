import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavebankComponent } from './savebank.component';

describe('SavebankComponent', () => {
  let component: SavebankComponent;
  let fixture: ComponentFixture<SavebankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavebankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavebankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
