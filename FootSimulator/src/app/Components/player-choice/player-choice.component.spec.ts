import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerChoiceComponent } from './player-choice.component';

describe('ChoixJoueurComponent', () => {
  let component: PlayerChoiceComponent;
  let fixture: ComponentFixture<PlayerChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerChoiceComponent]
    });
    fixture = TestBed.createComponent(PlayerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
