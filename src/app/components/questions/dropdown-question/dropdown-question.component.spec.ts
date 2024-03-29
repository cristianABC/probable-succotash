import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownQuestionComponent } from './dropdown-question.component';

describe('DropdownQuestionComponent', () => {
  let component: DropdownQuestionComponent;
  let fixture: ComponentFixture<DropdownQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
