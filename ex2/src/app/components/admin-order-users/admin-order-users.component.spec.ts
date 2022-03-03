import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderUsersComponent } from './admin-order-users.component';

describe('AdminOrderUsersComponent', () => {
  let component: AdminOrderUsersComponent;
  let fixture: ComponentFixture<AdminOrderUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
