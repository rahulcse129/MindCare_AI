import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Heart, Lightbulb, Shield } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type?: 'suggestion' | 'support' | 'question';
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your MindCare AI companion. I'm here to support your mental wellness journey. How are you feeling today?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'support'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aiResponses = [
    {
      keywords: ['sad', 'down', 'depressed', 'low'],
      response: "I hear that you're feeling down right now. It's completely normal to have difficult days. Remember that feelings are temporary, and you're stronger than you know. Would you like to try a breathing exercise or talk about what's on your mind?",
      type: 'support' as const
    },
    {
      keywords: ['anxious', 'worried', 'stress', 'nervous'],
      response: "Anxiety can feel overwhelming, but you're taking a positive step by reaching out. Let's focus on the present moment. Try the 5-4-3-2-1 technique: name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
      type: 'suggestion' as const
    },
    {
      keywords: ['happy', 'good', 'great', 'wonderful'],
      response: "That's wonderful to hear! I'm so glad you're feeling positive today. What's contributing to your good mood? Recognizing these moments helps build resilience for challenging times.",
      type: 'support' as const
    },
    {
      keywords: ['sleep', 'tired', 'insomnia', 'rest'],
      response: "Sleep is crucial for mental wellness. Try establishing a bedtime routine: dim the lights 1 hour before bed, avoid screens, and practice deep breathing. Would you like me to guide you through a sleep meditation?",
      type: 'suggestion' as const
    },
    {
      keywords: ['help', 'support', 'advice'],
      response: "I'm here to support you every step of the way. Remember that seeking help shows strength, not weakness. What specific area would you like to focus on today - mood, habits, or coping strategies?",
      type: 'question' as const
    }
  ];

  const generateAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const response of aiResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return {
          id: Date.now() + Math.random(),
          text: response.response,
          sender: 'ai',
          timestamp: new Date(),
          type: response.type
        };
      }
    }

    // Default response
    return {
      id: Date.now() + Math.random(),
      text: "Thank you for sharing that with me. Your feelings are valid and important. Can you tell me more about what you're experiencing right now? I'm here to listen and support you.",
      sender: 'ai',
      timestamp: new Date(),
      type: 'support'
    };
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiMessage = generateAIResponse(inputText);
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling anxious",
    "I had a good day",
    "I'm having trouble sleeping",
    "I need motivation",
    "Tell me a coping strategy"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Bot className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Wellness Chat</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Private, secure, and always here for you</p>
          </div>
          <div className="ml-auto flex items-center space-x-2 text-green-600">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-medium">End-to-End Encrypted</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`p-2 rounded-full ${
                  message.sender === 'user' 
                    ? 'bg-blue-100 dark:bg-blue-900/30' 
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  )}
                </div>
                
                <div className={`rounded-xl p-4 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : message.type === 'support'
                    ? 'bg-green-50 dark:bg-green-900/20 text-gray-900 dark:text-gray-100 border border-green-200 dark:border-green-700'
                    : message.type === 'suggestion'
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 text-gray-900 dark:text-gray-100 border border-yellow-200 dark:border-yellow-700'
                    : 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs ${
                      message.sender === 'user' 
                        ? 'text-blue-200' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {message.type === 'support' && message.sender === 'ai' && (
                      <Heart className="h-3 w-3 text-red-400" />
                    )}
                    {message.type === 'suggestion' && message.sender === 'ai' && (
                      <Lightbulb className="h-3 w-3 text-yellow-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
                  <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => setInputText(response)}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex space-x-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share what's on your mind..."
              className="flex-1 resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              rows={1}
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;