import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaugeDashboardComponent } from './gauge-dashboard.component';

describe('GaugeDashboardComponent', () => {
  let component: GaugeDashboardComponent;
  let fixture: ComponentFixture<GaugeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeDashboardComponent]
    });
    fixture = TestBed.createComponent(GaugeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
