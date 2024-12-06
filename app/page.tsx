import { Button } from '@/components/ui/button';
import { BarChart3, Users, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">Data Metrics</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Advanced Polling Platform
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Create interactive surveys, collect valuable feedback, and analyze results with powerful analytics tools.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Interactive Surveys</h3>
            <p className="mt-2 text-gray-600">Create engaging surveys with multiple question types and customization options.</p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Team Collaboration</h3>
            <p className="mt-2 text-gray-600">Work together with partners and moderators to manage campaigns effectively.</p>
          </div>

          <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4">Advanced Analytics</h3>
            <p className="mt-2 text-gray-600">Gain valuable insights with comprehensive data analysis and visualization tools.</p>
          </div>
        </div>
      </main>
    </div>
  );
}