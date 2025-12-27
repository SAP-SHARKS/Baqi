import React, { useState, useEffect } from 'react'; // Added useEffect
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import DashboardPage from './components/DashboardPage';
import MemorialPage from './components/MemorialPage';
import MemorialList from './components/MemorialList';
import { AppView } from './types';

// --- NEW IMPORTS ---
import { supabase } from './services/supabaseClient';
import { AuthModal } from './components/AuthModal';

const App: React.FC = () => {
  // 1. STATE: Keep your existing view state, add the new Auth state
  const [currentView, setCurrentView] = useState<AppView>(session ? AppView.DASHBOARD : AppView.LANDING);;
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  // New Auth State
 const [profile, setProfile] = useState<any>(null);
const [loading, setLoading] = useState(true);

const fetchProfile = async (userId: string) => {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  setProfile(data);
  setLoading(false); // Essential to stop the blank screen
};

  // 2. LOGIC: The "Check Login" Effect
  useEffect(() => {
  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
    if (session) {
      fetchProfile(session.user.id);
      // Ensure we switch away from Landing if they are already logged in
      setCurrentView(AppView.DASHBOARD); 
    } else {
      setLoading(false);
    }
    });
    }, []);

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchProfile(session.user.id);
      else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    setProfile(data);
    setLoading(false);
  };

  // 3. THE GATEKEEPER: This function decides if they can enter
  const handleBeginLegacy = () => {
    if (!session) {
      setIsAuthOpen(true); // Stop! Show login popup
    } else {
      setCurrentView(AppView.DASHBOARD); // Pass! Go to Dashboard
    }
  };
  if (loading) return <div className="min-h-screen flex items-center justify-center font-serif text-teal-900">Preparing your legacy...</div>;
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
                // UPDATED: If they click Dashboard, we check if they are logged in first!
                onClick={() => {
                  if (view.id === AppView.DASHBOARD) {
                    handleBeginLegacy();
                  } else {
                    setCurrentView(view.id);
                  }
                }}
                className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 ${currentView === view.id
                  ? 'bg-teal-800 text-white shadow-md'
                  : 'text-stone-500 hover:text-stone-900 hover:bg-white/50'
                  }`}
              >
                {view.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setCurrentView(AppView.DASHBOARD)} className="bg-teal-800 p-2 rounded-lg text-white">
              <span className="text-xs font-bold">App</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main>
        {/* Pass the Gatekeeper function to LandingPage so the big button works too */}
        {currentView === AppView.LANDING && (
          <LandingPage onNavigate={(view) => {
            if (view === AppView.DASHBOARD) {
              handleBeginLegacy();
            } else {
              setCurrentView(view);
            }
          }} />
        )}

        {currentView === AppView.FEATURES && <FeaturesPage onNavigate={setCurrentView} />}
        {currentView === AppView.DASHBOARD && (
  /* Check if the user has completed their profile (bio is not default) */
    !profile || profile.bio === 'Peace and blessings. I am just beginning to document my legacy.' ? (
      <OnboardingForm 
        user={session.user} 
        onComplete={() => fetchProfile(session.user.id)} 
      />
    ) : (
      <DashboardPage />
    )
  )}
        {currentView === AppView.MEMORIAL_LIST && <MemorialList onSelectProfile={(p) => { setSelectedProfile(p); setCurrentView(AppView.MEMORIAL_DEMO); }} />}
        {currentView === AppView.MEMORIAL_DEMO && <MemorialPage profile={selectedProfile} />}
      </main>

      {/* --- NEW ADDITION: The Login Popup --- */}
      {/* This sits at the bottom so it can pop up over everything else */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

    </div>
  );
};

export default App;
