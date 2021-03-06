import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookDetailsComponent } from './admin-book-details.component';

describe('AdminBookDetailsComponent', () => {
  let component: AdminBookDetailsComponent;
  let fixture: ComponentFixture<AdminBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
