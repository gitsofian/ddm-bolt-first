'use client';

import { Card } from '@/components/ui/card';
import {
  Bar,
  BarChart as RechartsBarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Mon', responses: 0 },
  { name: 'Tue', responses: 0 },
  { name: 'Wed', responses: 0 },
  { name: 'Thu', responses: 0 },
  { name: 'Fri', responses: 0 },
  { name: 'Sat', responses: 0 },
  { name: 'Sun', responses: 0 },
];

export function DashboardStats() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Weekly Response Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="responses"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}