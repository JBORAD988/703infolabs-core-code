import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBackgroundComponent } from './code-background.component';

describe('CodeBackgroundComponent', () => {
  let component: CodeBackgroundComponent;
  let fixture: ComponentFixture<CodeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
