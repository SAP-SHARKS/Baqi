
import React, { useState } from 'react';
import { ScheduledMessage, ActionItem } from '../types';
import AIChatPanel from './AIChatPanel';

const DashboardPage: React.FC = () => {
  const [showAI, setShowAI] = useState(false);

  const messages: ScheduledMessage[] = [
    { id: '1', to: 'Yusuf (Son)', event: '18th Birthday', date: 'Mar 2028', status: 'recorded', thumb: '👦' },
    { id: '2', to: 'Aisha (Daughter)', event: 'Wedding Day', date: 'Future', status: 'pending', thumb: '👧' },
    { id: '3', to: 'Family', event: 'After Passing', date: 'Immediate', status: 'recorded', thumb: '👨‍👩‍👧‍👦' },
  ];

  const actionItems: ActionItem[] = [
    { id: 'a1', priority: 'high', title: 'Draft Wasiyyah preamble', desc: 'Still in draft mode', icon: '📜' },
    { id: 'a2', priority: 'medium', title: 'Record message for Fatima', desc: 'Scheduled but empty', icon: '🎥' },
    { id: 'a3', priority: 'low', title: 'Verify digital cleanup', desc: '7 accounts listed', icon: '🧹' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 p-6 md:p-10 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-stone-900">Assalamu Alaikum, Ahmed</h1>
              <p className="text-stone-500 font-medium">Your legacy is 45% complete.</p>
            </div>
            <button className="bg-teal-800 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-900 shadow-md transition-all">
              + New Legacy Part
            </button>
          </header>

          {/* Progress Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-teal-800">Legacy Progress</span>
              <span className="text-3xl font-black text-stone-900">45%</span>
            </div>
            <div className="h-4 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
              <div 
                className="h-full bg-gradient-to-r from-teal-800 to-teal-500 rounded-full transition-all duration-1000"
                style={{ width: '45%' }}
              />
            </div>
            <div className="grid grid-cols-5 gap-2 mt-6 text-[10px] md:text-xs font-bold uppercase tracking-tighter text-stone-400">
              <div className="text-teal-800">Profile ✓</div>
              <div className="text-teal-800">Messages ✓</div>
              <div className="text-stone-300">Wasiyyah ⏳</div>
              <div className="text-teal-800">Executor ✓</div>
              <div className="text-stone-300">Cleanup ⏳</div>
            </div>
          </div>

          {/* Action Items */}
          <section className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
            <h2 className="text-xl font-bold p-6 border-b border-stone-50">Pending Tasks</h2>
            <div className="divide-y divide-stone-50">
              {actionItems.map((item) => (
                <div key={item.id} className="p-6 flex items-center gap-6 hover:bg-stone-50 transition-colors group">
                  <div className={`w-1.5 h-12 rounded-full ${
                    item.priority === 'high' ? 'bg-red-500' : item.priority === 'medium' ? 'bg-amber-500' : 'bg-stone-300'
                  }`} />
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900">{item.title}</h3>
                    <p className="text-sm text-stone-500 font-medium">{item.desc}</p>
                  </div>
                  <button className="text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-50 px-4 py-2 rounded-lg hover:bg-teal-800 hover:text-white transition-all">
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Messages */}
          <section className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
            <h2 className="text-xl font-bold p-6 border-b border-stone-50">Scheduled Messages</h2>
            <div className="divide-y divide-stone-50">
              {messages.map((msg) => (
                <div key={msg.id} className="p-6 flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {msg.thumb}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900">{msg.to}</h3>
                    <p className="text-sm text-stone-500 font-medium">{msg.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-stone-400 uppercase mb-1">{msg.date}</p>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      msg.status === 'recorded' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {msg.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* AI Helper Trigger/Panel */}
          {!showAI ? (
            <div 
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-br from-teal-800 to-teal-900 p-8 rounded-3xl text-white shadow-xl cursor-pointer hover:scale-[1.02] transition-transform group relative overflow-hidden"
            >
              <div className="absolute -right-4 -bottom-4 text-white/10 text-8xl transform rotate-12 group-hover:rotate-0 transition-transform">🤖</div>
              <h3 className="text-2xl font-bold mb-2">Stuck on your Wasiyyah?</h3>
              <p className="text-teal-100 mb-6 text-sm leading-relaxed">Let our AI Legacy Assistant help you draft your preamble or think of messages for loved ones.</p>
              <span className="inline-block bg-white text-teal-900 px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest">
                Chat with Assistant
              </span>
            </div>
          ) : (
            <div className="sticky top-20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black uppercase tracking-widest text-stone-400">Assistant Active</span>
                <button onClick={() => setShowAI(false)} className="text-stone-400 hover:text-stone-600">✕</button>
              </div>
              <AIChatPanel />
            </div>
          )}

          {/* Quick Stats */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-6">Quick Overview</h3>
            <div className="space-y-6">
              {[
                { label: 'Sadaqah Pledged', value: '$1,200', icon: '💝', color: 'text-pink-500' },
                { label: 'Total Messages', value: '3 / 10', icon: '🎥', color: 'text-blue-500' },
                { label: 'Cleanup Active', value: '7 Apps', icon: '🧹', color: 'text-stone-400' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="text-lg font-black text-stone-900 leading-none">{stat.value}</p>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-tighter">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
