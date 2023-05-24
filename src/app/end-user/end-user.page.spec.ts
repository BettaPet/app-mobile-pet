import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndUserPage } from './end-user.page';

describe('EndUserPage', () => {
  let component: EndUserPage;
  let fixture: ComponentFixture<EndUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
