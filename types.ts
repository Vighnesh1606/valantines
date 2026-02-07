
export enum AppStage {
  ENVELOPE = 'ENVELOPE',
  STORY = 'STORY',
  QUESTION = 'QUESTION',
  SUCCESS = 'SUCCESS'
}

export interface LoveNote {
  title: string;
  content: string;
}
