import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewLogoComponent } from './preview-logo.component';

describe('PreviewLogoComponent', () => {
  let component: PreviewLogoComponent;
  let fixture: ComponentFixture<PreviewLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
