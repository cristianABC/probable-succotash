import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-factory',
  templateUrl: './question-factory.component.html',
  styleUrls: ['./question-factory.component.css']
})
export class QuestionFactoryComponent implements OnInit {

  @Input() question: any;
  @Input() section: any;

  constructor() { }
  ngOnInit(): void {
  }

  buttonListener(type: string, event: any){
    console.log(type, event);
  }
}
