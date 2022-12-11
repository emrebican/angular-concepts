import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopComponentComponent } from './for-loop-component.component';

describe('ForLoopComponentComponent', () => {
  let component: ForLoopComponentComponent;
  let fixture: ComponentFixture<ForLoopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
