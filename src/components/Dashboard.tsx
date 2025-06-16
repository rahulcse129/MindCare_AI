import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Target, 
  Award,
  Smile,
  Battery,
  Sun,
  Moon,
  Star
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Current Mood', value: 'Good', icon: Smile, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Streak Days', value: '7', icon: Award, color: 'text-orange-600', bg: 'bg-orange-100' },
    { label: 'Energy Level', value: '85%', icon: Battery, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Habits Today', value: '3/4', icon: Target, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const recentActivity = [
    { time: '2 hours ago', activity: 'Completed meditation session', type: 'habit' },
    { time: '4 hours ago', activity: 'Logged mood: Optimistic', type: 'mood' },
    { time: '6 hours ago', activity: 'AI chat session completed', type: 'chat' },
    { time: 'Yesterday', activity: 'Achieved 7-day streak!', type: 'achievement' },
  ];

  const quickActions = [
    { label: 'Quick Chat', icon: MessageCircle, color: 'bg-blue-500', action: 'chat' },
    { label: 'Log Mood', icon: Heart, color: 'bg-pink-500', action: 'mood' },
    { label: 'View Progress', icon: TrendingUp, color: 'bg-green-500', action: 'habits' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full">
          <Sun className="h-5 w-5" />
          <span className="font-medium">Good morning, Alex!</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          You're doing great! Let's continue your wellness journey today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bg} dark:opacity-80`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`${action.color} text-white p-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Today's Progress */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Progress</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Daily Goals</span>
            <span className="text-sm font-medium text-blue-600">75% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4 transition-all duration-500"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Meditation</p>
              <p className="text-sm font-semibold text-green-600">Done</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Mood Log</p>
              <p className="text-sm font-semibold text-blue-600">Done</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sun className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Exercise</p>
              <p className="text-sm font-semibold text-orange-600">Pending</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <Moon className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Sleep</p>
              <p className="text-sm font-semibold text-gray-400">Later</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                item.type === 'achievement' ? 'bg-yellow-400' :
                item.type === 'habit' ? 'bg-green-400' :
                item.type === 'mood' ? 'bg-pink-400' : 'bg-blue-400'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">{item.activity}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
              </div>
              {item.type === 'achievement' && (
                <Star className="h-4 w-4 text-yellow-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;