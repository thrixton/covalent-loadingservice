import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFormComponent } from './load-form.component';

describe('LoadFormComponent', () => {
  let component: LoadFormComponent;
  let fixture: ComponentFixture<LoadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
