import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputersItemComponent } from './computers-item.component';

describe('ComputersItemComponent', () => {
  let component: ComputersItemComponent;
  let fixture: ComponentFixture<ComputersItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputersItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
