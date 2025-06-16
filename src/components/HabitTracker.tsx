import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  Target, 
  Award, 
  Flame, 
  Calendar,
  TrendingUp,
  Star,
  Clock
} from 'lucide-react';

interface Habit {
  id: number;
  name: string;
  description: string;
  category: string;
  streak: number;
  completedToday: boolean;
  weeklyProgress: boolean[];
  color: string;
  icon: string;
  targetDays: number;
}

const HabitTracker = () => {
  const [habits, setHabits] = useState<Habit[]>([
    {
      id: 1,
      name: 'Morning Meditation',
      description: '10 minutes of mindfulness',
      category: 'Mental Wellness',
      streak: 7,
      completedToday: true,
      weeklyProgress: [true, true, true, true, true, true, true],
      color: 'bg-purple-500',
      icon: '🧘‍♀️',
      targetDays: 7
    },
    {
      id: 2,
      name: 'Gratitude Journal',
      description: 'Write 3 things I\'m grateful for',
      category: 'Mental Wellness',
      streak: 5,
      completedToday: true,
      weeklyProgress: [true, true, false, true, true, true, true],
      color: 'bg-yellow-500',
      icon: '📝',
      targetDays: 7
    },
    {
      id: 3,
      name: 'Exercise',
      description: '30 minutes of physical activity',
      category: 'Physical Health',
      streak: 3,
      completedToday: false,
      weeklyProgress: [true, false, true, true, false, true, false],
      color: 'bg-green-500',
      icon: '🏃‍♂️',
      targetDays: 5
    },
    {
      id: 4,
      name: 'Read Before Bed',
      description: '20 minutes of reading',
      category: 'Personal Growth',
      streak: 12,
      completedToday: false,
      weeklyProgress: [true, true, true, true, true, true, false],
      color: 'bg-blue-500',
      icon: '📚',
      targetDays: 6
    }
  ]);

  const [showAddHabit, setShowAddHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({
    name: '',
    description: '',
    category: 'Mental Wellness',
    targetDays: 7
  });

  const categories = ['Mental Wellness', 'Physical Health', 'Personal Growth', 'Social', 'Career'];
  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-indigo-500'];
  const icons = ['🧘‍♀️', '📝', '🏃‍♂️', '📚', '💪', '🎯', '🌱', '💡', '🎨', '🍎'];

  const toggleHabit = (habitId: number) => {
    setHabits(habits.map(habit => 
      habit.id === habitId 
        ? { 
            ...habit, 
            completedToday: !habit.completedToday,
            streak: !habit.completedToday ? habit.streak + 1 : Math.max(0, habit.streak - 1)
          }
        : habit
    ));
  };

  const addHabit = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    const habit: Habit = {
      id: Date.now(),
      name: newHabit.name,
      description: newHabit.description,
      category: newHabit.category,
      streak: 0,
      completedToday: false,
      weeklyProgress: [false, false, false, false, false, false, false],
      color: randomColor,
      icon: randomIcon,
      targetDays: newHabit.targetDays
    };

    setHabits([...habits, habit]);
    setNewHabit({ name: '', description: '', category: 'Mental Wellness', targetDays: 7 });
    setShowAddHabit(false);
  };

  const getCompletionRate = () => {
    const totalHabits = habits.length * 7;
    const completedHabits = habits.reduce((acc, habit) => 
      acc + habit.weeklyProgress.filter(Boolean).length, 0
    );
    return totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;
  };

  const getTotalStreak = () => {
    return habits.reduce((acc, habit) => acc + habit.streak, 0);
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Habit Tracker</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Build positive habits and track your progress
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Completion</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {getCompletionRate().toFixed(0)}%
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Streaks</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{getTotalStreak()}</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Active Habits</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{habits.length}</p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Add Habit Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowAddHabit(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Habit</span>
        </button>
      </div>

      {/* Add Habit Form */}
      {showAddHabit && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Habit</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Habit Name
              </label>
              <input
                type="text"
                value={newHabit.name}
                onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                placeholder="e.g., Morning walk"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <input
                type="text"
                value={newHabit.description}
                onChange={(e) => setNewHabit({...newHabit, description: e.target.value})}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                placeholder="Brief description of the habit"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={newHabit.category}
                  onChange={(e) => setNewHabit({...newHabit, category: e.target.value})}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target Days/Week
                </label>
                <input
                  type="number"
                  min="1"
                  max="7"
                  value={newHabit.targetDays}
                  onChange={(e) => setNewHabit({...newHabit, targetDays: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={addHabit}
                disabled={!newHabit.name.trim()}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Add Habit
              </button>
              <button
                onClick={() => setShowAddHabit(false)}
                className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Habits List */}
      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 ${habit.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {habit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{habit.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{habit.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{habit.category}</span>
                    {habit.streak > 0 && (
                      <div className="flex items-center space-x-1">
                        <Flame className="h-3 w-3 text-orange-500" />
                        <span className="text-xs font-medium text-orange-600">{habit.streak} day streak</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => toggleHabit(habit.id)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  habit.completedToday
                    ? `${habit.color} border-transparent text-white`
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                {habit.completedToday && <Check className="h-4 w-4" />}
              </button>
            </div>

            {/* Weekly Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">This Week</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {habit.weeklyProgress.filter(Boolean).length}/{habit.targetDays}
                </span>
              </div>
              <div className="flex space-x-1">
                {weekDays.map((day, index) => (
                  <div key={day} className="flex-1 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{day}</div>
                    <div className={`h-2 rounded-full ${
                      habit.weeklyProgress[index] 
                        ? habit.color 
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            {habit.streak >= 7 && (
              <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                    Achievement Unlocked: Week Warrior! 🏆
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {habits.length === 0 && (
        <div className="text-center py-12">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No habits yet</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Start building positive habits to improve your wellness
          </p>
          <button
            onClick={() => setShowAddHabit(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Add Your First Habit
          </button>
        </div>
      )}
    </div>
  );
};

export default HabitTracker;