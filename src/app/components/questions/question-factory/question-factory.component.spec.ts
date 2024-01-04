import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFactoryComponent } from './question-factory.component';
import { FormBuilder } from '@angular/forms';

describe('QuestionFactoryComponent', () => {
  let component: QuestionFactoryComponent;
  let fixture: ComponentFixture<QuestionFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFactoryComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.question = { type: 'number', title: 'Test Component' };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

 it('should create number component', ()=> {
    component.question = { type: 'number', title: 'Test Component' };
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('app-number-question');
    expect(element).toBeTruthy();
  });
   it('should create radio component', ()=> {
    component.question.type = 'radio';
    component.ngOnInit();
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('app-radio');
    expect(element).toBeTruthy();
  });
  it('should create three_buttons component', ()=> {
    component.question.type = 'three_buttons';
    component.ngOnInit();
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('app-three-buttons');
    expect(element).toBeTruthy();
  });
  it('should create number component', ()=> {
    component.question.type = 'dropdown';
    component.ngOnInit();
    fixture.detectChanges();
    const element = fixture.debugElement.nativeElement.querySelector('app-dropdown-question');
    expect(element).toBeTruthy();
  }); 
});
