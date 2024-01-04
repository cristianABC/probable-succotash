import { Component, Input, OnInit } from '@angular/core';
import { Section } from './models/section.interface';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  @Input() section:Section | null = null;
  @Input() index:number = 1;
  questions:any[]=[];
  options: any[] =[];

  constructor(private questionService: QuestionsService){}

  ngOnInit(){
    this.questionService.getQuestionsBySection().subscribe(questions => {
      console.log(questions[0]);
      this.options = questions[0].choiceOptions;
    })
  }
  buttonListener(type: string, event: any){
    console.log(type, event);
  }
}
