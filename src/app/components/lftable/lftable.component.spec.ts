import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LftableComponent } from './lftable.component';

describe('LftableComponent', () => {
  let component: LftableComponent;
  let fixture: ComponentFixture<LftableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LftableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
