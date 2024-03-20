import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTerminalComponent } from './card-terminal.component';

describe('CardTerminalComponent', () => {
  let component: CardTerminalComponent;
  let fixture: ComponentFixture<CardTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
