
export enum AppView {
  LANDING = 'LANDING',
  FEATURES = 'FEATURES',
  DASHBOARD = 'DASHBOARD',
  MEMORIAL_LIST = 'MEMORIAL_LIST', // ADD THIS
  MEMORIAL_DEMO = 'MEMORIAL_DEMO'  // ADD THIS
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
