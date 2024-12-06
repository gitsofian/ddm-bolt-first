'use client';

import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { BarChart3, LogOut } from 'lucide-react';

export function DashboardNav() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/dashboard" className="flex items-center">
              <BarChart3 className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">Data Metrics</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {user?.name} ({user?.role})
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => auth.signOut()}
              className="flex items-center"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}