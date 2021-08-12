import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbekendeurlComponent } from './onbekendeurl.component';

describe('OnbekendeurlComponent', () => {
  let component: OnbekendeurlComponent;
  let fixture: ComponentFixture<OnbekendeurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbekendeurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbekendeurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
