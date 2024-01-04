import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { SectionComponent } from './features/section/section.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { QuestionComponent } from './features/section/question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownQuestionComponent } from './components/questions/dropdown-question/dropdown-question.component';
import { ThreeButtonsComponent } from './components/questions/three-buttons/three-buttons.component';
import { RadioComponent } from './components/questions/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    DashboardComponent,
    QuestionComponent,
    DropdownQuestionComponent,
    ThreeButtonsComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
