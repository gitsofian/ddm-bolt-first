export type UserRole = 'admin' | 'partner' | 'moderator' | 'voter';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Partner extends User {
  role: 'partner';
  subscriptionStatus: 'active' | 'inactive' | 'cancelled';
  moderators: string[]; // Array of moderator IDs
  stripeCustomerId?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  options?: string[];
  correctAnswer?: string | string[];
  imageUrl?: string;
  scale?: number; // For Likert scale
  required: boolean;
  order: number;
}

export type QuestionType = 
  | 'single_choice'
  | 'multiple_choice'
  | 'true_false'
  | 'likert_scale'
  | 'matching'
  | 'picture_choice'
  | 'binary_choice';

export interface Campaign {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  questions: Question[];
  status: 'draft' | 'active' | 'completed';
  startDate?: Date;
  endDate?: Date;
  responses: number;
}

export interface Response {
  id: string;
  campaignId: string;
  respondentId: string;
  answers: {
    questionId: string;
    answer: string | string[];
  }[];
  submittedAt: Date;
}