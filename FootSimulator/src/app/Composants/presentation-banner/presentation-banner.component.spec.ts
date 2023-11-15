import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBannerComponent } from './presentation-banner.component';

describe('PresentationBannerComponent', () => {
  let component: PresentationBannerComponent;
  let fixture: ComponentFixture<PresentationBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentationBannerComponent]
    });
    fixture = TestBed.createComponent(PresentationBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
