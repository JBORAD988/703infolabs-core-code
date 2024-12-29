import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGlobComponent } from './code-glob.component';

describe('CodeGlobComponent', () => {
  let component: CodeGlobComponent;
  let fixture: ComponentFixture<CodeGlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGlobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeGlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
