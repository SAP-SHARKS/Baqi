
export enum AppView {
  LANDING = 'landing',
  FEATURES = 'features',
  DASHBOARD = 'dashboard',
  MEMORIAL = 'memorial',
  AI_ASSISTANT = 'assistant'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ScheduledMessage {
  id: string;
  to: string;
  event: string;
  date: string;
  status: 'recorded' | 'pending';
  thumb: string;
}

export interface ActionItem {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  desc: string;
  icon: string;
}
