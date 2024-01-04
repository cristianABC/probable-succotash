export enum SurveyStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export interface Section {
  sectionOccurrenceId: string,
  status: SurveyStatus,
  name: string,
  description: string | null ,
  numberLevel: number,
  totalQuestions: number,
  answeredQuestions: number
}