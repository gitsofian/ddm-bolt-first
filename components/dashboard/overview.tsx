'use client';

import { Card } from '@/components/ui/card';
import { BarChart, Users, ClipboardCheck } from 'lucide-react';

export function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BarChart className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Active Campaigns</h3>
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Users className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Total Responses</h3>
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <ClipboardCheck className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-600">Completed Surveys</h3>
            <p className="text-2xl font-semibold">0</p>
          </div>
        </div>
      </Card>
    </div>
  );
}