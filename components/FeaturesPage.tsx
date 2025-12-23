
import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import { AppView } from '../types';

interface FeaturesPageProps {
  onNavigate: (view: AppView) => void;
}

const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-24 px-4 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-teal-800 text-sm font-bold uppercase tracking-[0.3em] mb-4">Complete Platform</p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900">The Anatomy of a Legacy</h1>
        </div>
        
        <div className="space-y-12">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden group hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full">Pre-Death Prep</span>
                <h2 className="text-3xl font-bold mt-4 mb-4 flex items-center gap-3">
                  <span>🎥</span> Scheduled Messages
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg font-medium">
                  Death is certain, but its timing is not. Record messages for your family's future milestones 
                  or the immediate aftermath of your return to Allah.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'High-quality video, audio, or encrypted text',
                    'Deliver on weddings, graduations, or specific dates',
                    'Ameen-verified activation upon your passing'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-500 font-medium">
                      <span className="w-2 h-2 bg-amber-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-80 bg-stone-100 flex items-center justify-center p-12 group-hover:bg-teal-50 transition-colors">
                <PlaceholderImage type="phone" className="w-full transform group-hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden group hover:shadow-xl transition-all">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="flex-1 p-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full">Islamic Obligation</span>
                <h2 className="text-3xl font-bold mt-4 mb-4 flex items-center gap-3">
                  <span>📜</span> Wasiyyah Creator
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg font-medium">
                  The Prophet ﷺ emphasized not letting two nights pass without a written will. 
                  Our tool simplifies Sharia-compliant inheritance and documentation.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <p className="text-stone-900 font-bold mb-1">Inheritance</p>
                    <p className="text-[10px] font-medium text-stone-500 uppercase tracking-widest">Calculated per Sharia</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <p className="text-stone-900 font-bold mb-1">Debts & Fasts</p>
                    <p className="text-[10px] font-medium text-stone-500 uppercase tracking-widest">Missed obligations</p>
                  </div>
                </div>
              </div>
              <div className="md:w-80 bg-stone-100 flex items-center justify-center p-12 group-hover:bg-amber-50 transition-colors">
                <PlaceholderImage type="document" className="w-full transform group-hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-stone-900 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 text-[200px] text-white/5 font-black pointer-events-none italic">CLEAN</div>
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">Protect Your Akhirah</span>
              <h2 className="text-3xl font-bold mt-4 mb-4 flex items-center gap-3">
                <span>🧹</span> Digital Footprint Cleanup
              </h2>
              <p className="text-white/60 leading-relaxed text-lg font-medium mb-8">
                Content left behind can be a source of constant "Jariyah" sins. Ensure your accounts are 
                memorialized or deleted according to your wishes.
              </p>
              <div className="space-y-4">
                {[
                  { name: 'Instagram', action: 'Delete Public Profile', status: 'pending' },
                  { name: 'Facebook', action: 'Convert to Memorial', status: 'ready' },
                  { name: 'Twitter / X', action: 'Deactivate Account', status: 'pending' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
                    <div>
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="text-xs text-white/40">{item.action}</p>
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                      item.status === 'ready' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <button 
            onClick={() => onNavigate(AppView.DASHBOARD)}
            className="bg-teal-800 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-teal-900 transition-all hover:scale-105 shadow-2xl"
          >
            Start Your Plan Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
