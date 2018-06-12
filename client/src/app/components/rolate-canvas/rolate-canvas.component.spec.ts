import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolateCanvasComponent } from './rolate-canvas.component';

describe('RolateCanvasComponent', () => {
  let component: RolateCanvasComponent;
  let fixture: ComponentFixture<RolateCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolateCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolateCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
