'use client';

import { useState } from 'react';
import { QuestionForm } from '@/components/questions/question-form';
import { QuestionList } from '@/components/questions/question-list';
import { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function CreateCampaignPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleAddQuestion = (data: Omit<Question, 'id'>) => {
    const newQuestion = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setQuestions([...questions, newQuestion as Question]);
  };

  const handleEditQuestion = (question: Question) => {
    // Implement edit functionality
  };

  const handleDeleteQuestion = (questionId: string) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Campaign</h1>
      
      <Card className="p-6 mb-8">
        <div className="space-y-4">
          <div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Campaign Title"
              className="mb-4"
            />
          </div>
          <div>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Campaign Description"
            />
          </div>
        </div>
      </Card>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Questions</h2>
        <QuestionForm onSubmit={handleAddQuestion} />
      </div>

      <QuestionList
        questions={questions}
        onEdit={handleEditQuestion}
        onDelete={handleDeleteQuestion}
      />

      <div className="mt-8">
        <Button size="lg">Create Campaign</Button>
      </div>
    </div>
  );
}