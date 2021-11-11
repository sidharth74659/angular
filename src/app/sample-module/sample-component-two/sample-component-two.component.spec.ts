import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentTwoComponent } from './sample-component-two.component';

describe('SampleComponentTwoComponent', () => {
  let component: SampleComponentTwoComponent;
  let fixture: ComponentFixture<SampleComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
