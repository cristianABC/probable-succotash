import { Component, OnInit } from '@angular/core';
import { SectionService } from '../section/services/section.service';
import { Section } from '../section/models/section.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sections: Section[]=[];
  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
      this.sectionService.getSections().subscribe(sections => {
        this.sections = sections;
      })     
  }

}
