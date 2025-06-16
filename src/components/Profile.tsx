import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Shield, 
  Bell, 
  Globe, 
  Moon, 
  Smartphone,
  Heart,
  Award,
  Calendar,
  Target,
  Trash2,
  Download,
  Upload
} from 'lucide-react';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [notifications, setNotifications] = useState({
    moodReminders: true,
    habitReminders: true,
    achievements: true,
    weeklyReports: true
  });

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analytics: true,
    anonymousUsage: true
  });

  const userStats = {
    totalDays: 45,
    currentStreak: 7,
    habitsCompleted: 127,
    moodEntries: 38
  };

  const achievements = [
    { name: 'First Steps', description: 'Completed your first mood entry', icon: '🌟', date: '2024-01-01' },
    { name: 'Week Warrior', description: '7-day habit streak', icon: '🏆', date: '2024-01-15' },
    { name: 'Mood Master', description: '30 mood entries logged', icon: '💎', date: '2024-01-10' },
    { name: 'Consistency Champion', description: 'Used the app for 30 days', icon: '👑', date: '2024-01-12' }
  ];

  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'data', label: 'Data', icon: Download }
  ];

  const renderProfileSection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-12 w-12 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Rahul Pal</h3>
        <p className="text-gray-600 dark:text-gray-400">Wellness Journey Started Jan 1, 2024</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-blue-600">{userStats.totalDays}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Days Active</p>
        </div>
        
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-orange-600">{userStats.currentStreak}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak</p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-green-600">{userStats.habitsCompleted}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Habits Done</p>
        </div>
        
        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg text-center">
          <Heart className="h-6 w-6 text-pink-600 mx-auto mb-2" />
          <p className="text-2xl font-bold text-pink-600">{userStats.moodEntries}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Mood Entries</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">Preferences</h4>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Language</span>
            </div>
            <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Moon className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Theme</span>
            </div>
            <select className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
              <option>Auto</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">Low-bandwidth mode</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notification Settings</h3>
      
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {key === 'moodReminders' && 'Daily reminders to log your mood'}
                {key === 'habitReminders' && 'Reminders for incomplete habits'}
                {key === 'achievements' && 'Notifications for unlocked achievements'}
                {key === 'weeklyReports' && 'Weekly progress summaries'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={value}
                onChange={(e) => setNotifications({...notifications, [key]: e.target.checked})}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrivacySection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy & Security</h3>
      
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <p className="text-green-800 dark:text-green-200 font-medium">Your data is secure</p>
        </div>
        <p className="text-green-700 dark:text-green-300 text-sm mt-1">
          All your personal data is encrypted and stored locally. We never sell your information.
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(privacy).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {key === 'dataSharing' && 'Share anonymized data to improve mental health research'}
                {key === 'analytics' && 'Help us improve the app with usage analytics'}
                {key === 'anonymousUsage' && 'Anonymous usage statistics for app optimization'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={value}
                onChange={(e) => setPrivacy({...privacy, [key]: e.target.checked})}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAchievementsSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Achievements</h3>
      
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{achievement.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Unlocked {new Date(achievement.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDataSection = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Management</h3>
      
      <div className="space-y-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Export Your Data</h4>
          <p className="text-blue-800 dark:text-blue-200 text-sm mb-3">
            Download all your mood entries, habits, and progress data in JSON format.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Import Data</h4>
          <p className="text-green-800 dark:text-green-200 text-sm mb-3">
            Import your data from another wellness app or a previous export.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Upload className="h-4 w-4" />
            <span>Import Data</span>
          </button>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-700">
          <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">Delete All Data</h4>
          <p className="text-red-800 dark:text-red-200 text-sm mb-3">
            Permanently delete all your data. This action cannot be undone.
          </p>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors flex items-center space-x-2">
            <Trash2 className="h-4 w-4" />
            <span>Delete All Data</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSection();
      case 'notifications':
        return renderNotificationsSection();
      case 'privacy':
        return renderPrivacySection();
      case 'achievements':
        return renderAchievementsSection();
      case 'data':
        return renderDataSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 bg-gray-50 dark:bg-gray-700 p-4">
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;