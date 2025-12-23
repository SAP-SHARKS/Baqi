
import React from 'react';
import PlaceholderImage from './PlaceholderImage';
import { AppView } from '../types';

interface LandingPageProps {
  onNavigate: (view: AppView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-stone-50 to-stone-100 relative">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg text-teal-800 font-serif mb-4 italic">إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-stone-900">
              Your Legacy.<br />
              <span className="text-teal-800">Preserved with Purpose.</span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              The first Islamic digital legacy platform. Prepare your wasiyyah, 
              schedule messages for loved ones, and honor the departed with sadaqah jariyah.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button 
                onClick={() => onNavigate(AppView.DASHBOARD)}
                className="bg-teal-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-900 transition-all hover:scale-105 shadow-lg"
              >
                Begin Your Legacy
              </button>
              <button 
                onClick={() => onNavigate(AppView.MEMORIAL)}
                className="border-2 border-teal-800 text-teal-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-all shadow-md"
              >
                View Memorial Demo
              </button>
            </div>
            
            <div className="flex gap-8 justify-center lg:justify-start mt-12 flex-wrap text-sm font-medium text-stone-500 uppercase tracking-widest">
              <span className="flex items-center gap-2">🕌 Scholar Reviewed</span>
              <span className="flex items-center gap-2">🔒 End-to-End Encrypted</span>
              <span className="flex items-center gap-2">📜 Sharia Compliant</span>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 animate-fade-in-up">
              <PlaceholderImage type="mosque" className="w-full rounded-3xl shadow-2xl border-8 border-white" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <PlaceholderImage type="heart" className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="font-black text-2xl text-stone-900">$2.4M+</p>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Sadaqah Jariyah Raised</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">👨‍👩‍👧‍👦</span>
                  <div>
                    <p className="font-black text-2xl text-stone-900">10,000+</p>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Families Served</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-800/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-4 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Baqi Matters</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { icon: '⚠️', title: '70% die without wasiyyah', desc: 'Despite it being an Islamic obligation, most families face complex legal hurdles during grief.' },
              { icon: '📱', title: 'Digital sins continue', desc: 'Public content and social media accounts can continue generating sins long after you return to Allah.' },
              { icon: '💐', title: 'Flowers over Sadaqah', desc: 'Billions are spent on temporary flowers. We turn that into everlasting charity (Sadaqah Jariyah).' },
              { icon: '💔', title: 'Unspoken final words', desc: 'Crucial messages of wisdom, love, and reconciliation often go unshared due to the sudden nature of death.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="text-amber-400 text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-stone-100 to-stone-50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-teal-800 text-sm font-bold uppercase tracking-[0.2em] mb-4">Your Spiritual Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">How Baqi Works</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-stone-200 hidden md:block" />
            
            <div className="space-y-24">
              {[
                {
                  step: 1,
                  title: 'Secure Your Account',
                  desc: 'Sign up in 2 minutes. Start documenting your spiritual and worldly legacy for free.',
                  icon: '👤',
                  side: 'left',
                  image: 'phone'
                },
                {
                  step: 2,
                  title: 'Draft While Living',
                  desc: 'Record personal messages, create your Sharia-compliant wasiyyah, and set digital cleanup instructions.',
                  icon: '🎥',
                  side: 'right',
                  image: 'document'
                },
                {
                  step: 3,
                  title: 'Assign Your Executor',
                  desc: 'Choose a trusted "Ameen" (Executor) who will verify your passing and activate your legacy plan.',
                  icon: '🤝',
                  side: 'left',
                  image: 'family'
                },
                {
                  step: 4,
                  title: 'The Everlasting Legacy',
                  desc: 'Upon verification, messages are delivered, memorials launched, and your Sadaqah Jariyah begins to flow.',
                  icon: '✨',
                  side: 'right',
                  image: 'mosque'
                },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.side === 'right' ? 'md:text-right' : ''}`}>
                    <div className={`bg-white p-10 rounded-3xl shadow-xl border border-stone-100 ${item.side === 'right' ? 'md:ml-auto' : 'md:mr-auto'} max-w-md relative group`}>
                      <div className={`flex items-center gap-4 mb-6 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                        <span className="text-4xl">{item.icon}</span>
                        <div className="bg-teal-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-4 h-4 bg-teal-800 rounded-full z-10 shadow-[0_0_0_8px_rgba(13,92,77,0.1)]" />
                  
                  <div className="flex-1 hidden md:block">
                    <div className={`${item.side === 'right' ? 'mr-auto' : 'ml-auto'} w-64 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}>
                      <PlaceholderImage type={item.image as any} className="w-full rounded-2xl shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4 bg-teal-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <PlaceholderImage type="mosque" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
            "When a person dies, their deeds come to an end except for three: 
            Sadaqah Jariyah (everlasting charity), beneficial knowledge, or a righteous child who prays for them."
          </blockquote>
          <cite className="text-amber-400 font-bold text-lg">— Prophet Muhammad ﷺ (Sahih Muslim)</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-white relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Legacy Awaits.</h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto">Join thousands of Muslims ensuring their affairs are in order and their legacy is one of purpose.</p>
          
          <div className="bg-stone-50 p-12 rounded-3xl shadow-2xl border border-stone-200 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-4 border border-stone-300 rounded-xl mb-4 text-center text-lg focus:ring-2 focus:ring-teal-500 outline-none"
            />
            <button 
              onClick={() => onNavigate(AppView.DASHBOARD)}
              className="w-full bg-teal-800 text-white py-5 rounded-xl text-xl font-bold hover:bg-teal-900 shadow-lg transform hover:-translate-y-1 transition-all"
            >
              Get Started for Free
            </button>
            <p className="text-sm text-stone-500 mt-6">Secure • No credit card required • Join 10k+ families</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/10 pb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-3xl text-amber-500">☽</span>
                <span className="text-3xl font-serif font-black">Baqi</span>
              </div>
              <p className="text-white/50 italic font-serif">الباقي — "The Everlasting"</p>
            </div>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-white/60">
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Scholars</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-white/30 text-sm">
            © {new Date().getFullYear()} Baqi Digital Legacy Platform. Built for the Akhirah.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
