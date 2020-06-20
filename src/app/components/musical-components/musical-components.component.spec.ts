import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalComponentsComponent } from './musical-components.component';

describe('MusicalComponentsComponent', () => {
  let component: MusicalComponentsComponent;
  let fixture: ComponentFixture<MusicalComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
