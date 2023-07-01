import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFooterComponent } from './side-footer.component';

describe('SideFooterComponent', () => {
  let component: SideFooterComponent;
  let fixture: ComponentFixture<SideFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideFooterComponent]
    });
    fixture = TestBed.createComponent(SideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
