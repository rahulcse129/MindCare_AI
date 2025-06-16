import React, { useState } from 'react';
import { 
  Smile, 
  Meh, 
  Frown, 
  Heart, 
  TrendingUp,
  Calendar,
  BarChart3,
  Plus
} from 'lucide-react';

interface MoodEntry {
  id: number;
  date: string;
  mood: number;
  emotions: string[];
  note?: string;
}

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number>(3);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [moodEntries] = useState<MoodEntry[]>([
    { id: 1, date: '2024-01-15', mood: 4, emotions: ['Happy', 'Energetic'], note: 'Great day at work!' },
    { id: 2, date: '2024-01-14', mood: 3, emotions: ['Calm', 'Focused'] },
    { id: 3, date: '2024-01-13', mood: 2, emotions: ['Anxious', 'Tired'], note: 'Stressful deadline' },
    { id: 4, date: '2024-01-12', mood: 5, emotions: ['Joyful', 'Grateful'], note: 'Amazing weekend!' },
    { id: 5, date: '2024-01-11', mood: 3, emotions: ['Neutral', 'Productive'] },
    { id: 6, date: '2024-01-10', mood: 4, emotions: ['Optimistic', 'Creative'] },
    { id: 7, date: '2024-01-09', mood: 2, emotions: ['Sad', 'Lonely'] },
  ]);

  const moods = [
    { value: 1, label: 'Very Low', icon: '😢', color: 'text-red-500', bg: 'bg-red-100' },
    { value: 2, label: 'Low', icon: '😔', color: 'text-orange-500', bg: 'bg-orange-100' },
    { value: 3, label: 'Neutral', icon: '😐', color: 'text-yellow-500', bg: 'bg-yellow-100' },
    { value: 4, label: 'Good', icon: '😊', color: 'text-green-500', bg: 'bg-green-100' },
    { value: 5, label: 'Excellent', icon: '😄', color: 'text-blue-500', bg: 'bg-blue-100' },
  ];

  const emotions = [
    'Happy', 'Sad', 'Anxious', 'Calm', 'Energetic', 'Tired',
    'Grateful', 'Frustrated', 'Optimistic', 'Lonely', 'Confident',
    'Overwhelmed', 'Peaceful', 'Excited', 'Worried', 'Content'
  ];

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleSubmit = () => {
    // In a real app, this would save to a database
    console.log('Mood entry:', { mood: selectedMood, emotions: selectedEmotions, note });
    setSelectedMood(3);
    setSelectedEmotions([]);
    setNote('');
  };

  const getMoodStats = () => {
    const avgMood = moodEntries.reduce((acc, entry) => acc + entry.mood, 0) / moodEntries.length;
    const trend = moodEntries.slice(-3).reduce((acc, entry) => acc + entry.mood, 0) / 3;
    const previousTrend = moodEntries.slice(-6, -3).reduce((acc, entry) => acc + entry.mood, 0) / 3;
    const isImproving = trend > previousTrend;
    
    return { avgMood, isImproving };
  };

  const stats = getMoodStats();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mood Tracker</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Track your daily emotions and identify patterns over time
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Mood</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.avgMood.toFixed(1)}/5
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Trend</p>
              <p className={`text-2xl font-bold ${stats.isImproving ? 'text-green-600' : 'text-orange-600'}`}>
                {stats.isImproving ? 'Improving' : 'Stable'}
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
              <p className="text-sm text-gray-600 dark:text-gray-400">Streak</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">7 days</p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Mood Entry Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">How are you feeling today?</h3>
        
        {/* Mood Scale */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Select your overall mood:</p>
          <div className="flex justify-between items-center space-x-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  selectedMood === mood.value
                    ? `${mood.bg} dark:opacity-80 scale-110 shadow-lg`
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-2xl mb-2">{mood.icon}</span>
                <span className={`text-xs font-medium ${
                  selectedMood === mood.value ? mood.color : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Emotions */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">What emotions are you experiencing?</p>
          <div className="flex flex-wrap gap-2">
            {emotions.map((emotion) => (
              <button
                key={emotion}
                onClick={() => toggleEmotion(emotion)}
                className={`px-3 py-2 rounded-full text-sm transition-all ${
                  selectedEmotions.includes(emotion)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Additional notes (optional):
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What contributed to your mood today?"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none resize-none"
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Save Mood Entry</span>
        </button>
      </div>

      {/* Recent Entries */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Recent Entries</h3>
        <div className="space-y-4">
          {moodEntries.slice(0, 5).map((entry) => {
            const mood = moods.find(m => m.value === entry.mood)!;
            return (
              <div key={entry.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0">
                  <span className="text-2xl">{mood.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {mood.label} Mood
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(entry.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {entry.emotions.map((emotion, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-xs rounded-full"
                      >
                        {emotion}
                      </span>
                    ))}
                  </div>
                  {entry.note && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{entry.note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;