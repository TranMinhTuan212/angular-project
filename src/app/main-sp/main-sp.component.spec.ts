import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSPComponent } from './main-sp.component';

describe('MainSPComponent', () => {
  let component: MainSPComponent;
  let fixture: ComponentFixture<MainSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
