import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Ensure your client path is correct

export const AuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const signInWithProvider = async (provider: 'google' | 'facebook') => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: window.location.origin // Redirects back to your site after login
      }
    });
    if (error) alert(error.message);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-fade-in">
        <h2 className="text-2xl font-black text-stone-900 mb-2 text-center">Start Your Legacy</h2>
        <p className="text-stone-500 text-sm text-center mb-8">Securely preserve your wasiyyah and memories.</p>
        
        <div className="space-y-3">
          <button 
            onClick={() => signInWithProvider('google')}
            className="w-full flex items-center justify-center gap-3 py-4 border border-stone-200 rounded-2xl hover:bg-stone-50 transition-all font-bold"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5" alt="Google" />
            Continue with Google
          </button>
          
          <button 
            onClick={() => signInWithProvider('facebook')}
            className="w-full flex items-center justify-center gap-3 py-4 bg-[#1877F2] text-white rounded-2xl hover:opacity-90 transition-all font-bold"
          >
            <img src="https://www.svgrepo.com/show/475643/facebook-color.svg" className="w-5 brightness-0 invert" alt="FB" />
            Continue with Facebook
          </button>
        </div>
        
        <button onClick={onClose} className="mt-6 w-full text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-600">
          Cancel
        </button>
      </div>
    </div>
  );
};
