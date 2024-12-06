'use client';

import { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Edit2, Trash2 } from 'lucide-react';

interface QuestionListProps {
  questions: Question[];
  onEdit: (question: Question) => void;
  onDelete: (questionId: string) => void;
}

export function QuestionList({ questions, onEdit, onDelete }: QuestionListProps) {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <Card key={question.id} className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{question.title}</h3>
              {question.description && (
                <p className="text-sm text-gray-600">{question.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">Type: {question.type}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onEdit(question)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDelete(question.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}