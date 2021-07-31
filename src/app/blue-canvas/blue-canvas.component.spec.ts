import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCanvasComponent } from './blue-canvas.component';

describe('BlueCanvasComponent', () => {
  let component: BlueCanvasComponent;
  let fixture: ComponentFixture<BlueCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
