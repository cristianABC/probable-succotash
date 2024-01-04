import { Component, Input, OnInit } from '@angular/core';
import { Section } from './models/section.interface';
import { QuestionsService } from './services/questions.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() section:Section | null = null;
  @Input() index:number = 1;
  questions:any[]=[];
  form = this.fb.group({});

  constructor(private questionService: QuestionsService, private fb: FormBuilder){}

  ngOnInit(){
    this.questionService.getQuestionsBySection().subscribe(questions => {
      this.questions = questions;
      this.form.addControl('questions', this.fb.array(questions.map((question:any) => this.fb.group({question: question.question, answer: ''}))));
      console.log(this.form.value);
      
    })
  }
  
}
