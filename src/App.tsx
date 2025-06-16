import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Target, 
  User, 
  Brain,
  Sparkles,
  Shield,
  Moon,
  Sun
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import ChatInterface from './components/ChatInterface';
import MoodTracker from './components/MoodTracker';
import HabitTracker from './components/HabitTracker';
import Profile from './components/Profile';

type TabType = 'dashboard' | 'chat' | 'mood' | 'habits' | 'profile';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Heart },
    { id: 'chat', label: 'AI Chat', icon: MessageCircle },
    { id: 'mood', label: 'Mood', icon: TrendingUp },
    { id: 'habits', label: 'Habits', icon: Target },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'chat':
        return <ChatInterface />;
      case 'mood':
        return <MoodTracker />;
      case 'habits':
        return <HabitTracker />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Header */}
      <header className={`${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/80 border-white/20'
      } backdrop-blur-md border-b transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-blue-600" />
                <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  MindCare AI
                </h1>
                <p className={`text-xs ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Your Wellness Companion
                </p>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className={`h-4 w-4 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`} />
                <span className={`text-xs font-medium ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  Private & Secure
                </span>
              </div>
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </main>

      {/* Bottom Navigation */}
      <nav className={`fixed bottom-0 left-0 right-0 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/90 border-gray-200'
      } backdrop-blur-md border-t`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                      : isDarkMode 
                        ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`h-5 w-5 mb-1 ${isActive ? 'scale-110' : ''} transition-transform`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Bottom padding to account for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
}

export default App;