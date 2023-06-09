import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeComponent } from './iframe.component';

describe('HomeComponent', () => {
  let component: IframeComponent;
  let fixture: ComponentFixture<IframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
