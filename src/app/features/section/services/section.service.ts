import { Injectable } from '@angular/core';
import { Section, SurveyStatus } from '../models/section.interface';
import { of } from 'rxjs';



const sections: Section[] = [
  {
      "sectionOccurrenceId": "5b5c83c81b516550869cc802604bcbad",
      "status": SurveyStatus.NOT_STARTED,
      "name": "SECTION 1",
      "description": null,
      "numberLevel": 1,
      "totalQuestions": 3,
      "answeredQuestions": 0
  },
  {
      "sectionOccurrenceId": "5b5c83c81b516550869cc802604bcbad",
      "status": SurveyStatus.NOT_STARTED,
      "name": "SECTION 2",
      "description": null,
      "numberLevel": 1,
      "totalQuestions": 2,
      "answeredQuestions": 0
  },
  {
      "sectionOccurrenceId": "5b5c83c81b516550869cc802604bcbad",
      "status": SurveyStatus.NOT_STARTED,
      "name": "SECTION 3",
      "description": null,
      "numberLevel": 1,
      "totalQuestions": 1,
      "answeredQuestions": 0
  },
]

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  getSections() { 
    return of(sections);
  }
  
}
