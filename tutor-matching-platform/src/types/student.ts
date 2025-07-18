export interface Student {
  id: string;
  name: string;
  grade: string;
  subjects: string[];
  budget: number;
  availableTime: string[];
  mode: 'online' | 'offline' | 'both';
  location: string;
  introduction: string;
  avatar?: string;
}

export interface ContactForm {
  tutorName: string;
  contact: string;
  message: string;
} 