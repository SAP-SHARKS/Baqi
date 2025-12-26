
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import DashboardPage from './components/DashboardPage';
import MemorialPage from './components/MemorialPage';
import { AppView } from './types';
import SadaqahCard from './components/SadaqahCard';

const App: React.FC = () => {
const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);

return (
<div className="min-h-screen bg-stone-50 selection:bg-teal-800 selection:text-white">
{/* Navigation */}
<nav className="fixed top-0 left-0 right-0 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 z-[100] transition-all">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div
className="flex items-center gap-3 cursor-pointer group"
onClick={() => setCurrentView(AppView.LANDING)}
>
<span className="text-2xl text-teal-800 group-hover:scale-110 transition-transform">☽</span>
<span className="text-2xl font-serif font-black text-teal-900 tracking-tight">Baqi</span>
</div>

<div className="hidden md:flex gap-2 p-1 bg-stone-200/50 rounded-full">
{[
{ id: AppView.LANDING, label: 'Your Home' },
{ id: AppView.FEATURES, label: 'Features' },
{ id: AppView.DASHBOARD, label: 'Dashboard' },
{ id: AppView.MEMORIAL_LIST, label: 'Memorials' },
].map(view => (
<button
key={view.id}
onClick={() => setCurrentView(view.id)}
className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${
currentView === view.id
? 'bg-teal-800 text-white shadow-md'
: 'text-stone-500 hover:text-stone-900 hover:bg-white/50'
}`}
>
{view.label}
</button>
))}
</div>

<div className="md:hidden">
{/* Simple mobile menu indicator */}
<button onClick={() => setCurrentView(AppView.DASHBOARD)} className="bg-teal-800 p-2 rounded-lg text-white">
<span className="text-xs font-bold">App</span>
</button>
</div>
</div>
</nav>

{/* Content Area */}
<main>
{currentView === AppView.LANDING && <LandingPage onNavigate={setCurrentView} />}
{currentView === AppView.FEATURES && <FeaturesPage onNavigate={setCurrentView} />}
{currentView === AppView.DASHBOARD && <DashboardPage />}
{currentView === AppView.MEMORIAL_LIST && <MemorialList onSelectProfile={() => setCurrentView(AppView.MEMORIAL_DEMO)} />}
{currentView === AppView.MEMORIAL_DEMO && <MemorialPage />}
</main>
</div>
);
};

export default App;
