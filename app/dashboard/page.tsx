'use client';

import { DashboardOverview } from '@/components/dashboard/overview';
import { DashboardStats } from '@/components/dashboard/stats';
import { useAuth } from '@/providers/auth-provider';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
      </div>
      
      <DashboardStats />
      <DashboardOverview />
    </div>
  );
}