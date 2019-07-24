import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VecinosComponent } from './vecinos.component';

describe('VecinosComponent', () => {
  let component: VecinosComponent;
  let fixture: ComponentFixture<VecinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
