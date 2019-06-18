import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompIntComponent } from './comp-int.component';

describe('CompIntComponent', () => {
  let component: CompIntComponent;
  let fixture: ComponentFixture<CompIntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompIntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
