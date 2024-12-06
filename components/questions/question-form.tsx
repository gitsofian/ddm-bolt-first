'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { QuestionType } from '@/types';

const questionSchema = z.object({
  type: z.enum(['single_choice', 'multiple_choice', 'true_false', 'likert_scale', 'matching', 'picture_choice', 'binary_choice']),
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  required: z.boolean().default(true),
  order: z.number(),
  options: z.array(z.string()).optional(),
});

type QuestionFormData = z.infer<typeof questionSchema>;

interface QuestionFormProps {
  onSubmit: (data: QuestionFormData) => void;
  initialData?: Partial<QuestionFormData>;
}

export function QuestionForm({ onSubmit, initialData }: QuestionFormProps) {
  const [options, setOptions] = useState<string[]>(initialData?.options || []);
  const { register, handleSubmit, formState: { errors } } = useForm<QuestionFormData>({
    resolver: zodResolver(questionSchema),
    defaultValues: initialData,
  });

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Select {...register('type')}>
          <option value="single_choice">Single Choice</option>
          <option value="multiple_choice">Multiple Choice</option>
          <option value="true_false">True/False</option>
          <option value="likert_scale">Likert Scale</option>
          <option value="matching">Matching</option>
          <option value="picture_choice">Picture Choice</option>
          <option value="binary_choice">Binary Choice</option>
        </Select>
        {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
      </div>

      <div>
        <Input {...register('title')} placeholder="Question Title" />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div>
        <Input {...register('description')} placeholder="Description (optional)" />
      </div>

      {options.map((option, index) => (
        <div key={index} className="flex gap-2">
          <Input
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
          />
        </div>
      ))}

      <Button type="button" variant="outline" onClick={handleAddOption}>
        Add Option
      </Button>

      <Button type="submit">Save Question</Button>
    </form>
  );
}