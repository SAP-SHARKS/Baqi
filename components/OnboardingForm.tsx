import { useState } from 'react';
import { supabase } from '../services/supabaseClient';

const OnboardingForm = ({ user, onComplete }: { user: any; onComplete: () => void }) => {
  const [formData, setFormData] = useState({
    full_name: user.user_metadata?.full_name || '',
    location: '',
    birth_date: '',
    death_date: '',
    bio: '',
    is_public: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Updates the row created by your SQL Trigger
    const { error } = await supabase
      .from('profiles')
      .update(formData)
      .eq('id', user.id);

    if (!error) {
      onComplete(); // Takes them to the Dashboard
    } else {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-10 bg-white rounded-[2.5rem] shadow-xl border border-stone-100">
      <h2 className="text-3xl font-black text-stone-900 mb-2">Create Your Legacy</h2>
      <p className="text-stone-500 mb-8">This information will populate your public memorial page.</p>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
          <input required className="w-full p-4 bg-stone-50 border-none rounded-2xl focus:ring-2 focus:ring-teal-800" 
            value={formData.full_name} onChange={e => setFormData({...formData, full_name: e.target.value})} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Birth Date</label>
            <input type="date" className="w-full p-4 bg-stone-50 border-none rounded-2xl" 
              onChange={e => setFormData({...formData, birth_date: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Death Date</label>
            <input type="date" className="w-full p-4 bg-stone-50 border-none rounded-2xl" 
              onChange={e => setFormData({...formData, death_date: e.target.value})} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Residing City</label>
          <input placeholder="e.g. London, UK" className="w-full p-4 bg-stone-50 border-none rounded-2xl" 
            onChange={e => setFormData({...formData, location: e.target.value})} />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-2">Brief Bio</label>
          <textarea rows={4} className="w-full p-4 bg-stone-50 border-none rounded-2xl" 
            onChange={e => setFormData({...formData, bio: e.target.value})} />
        </div>

        <button type="submit" className="w-full py-5 bg-teal-900 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-teal-800 transition-all shadow-lg">
          Create My Memorial Card
        </button>
      </form>
    </div>
  );
};
export default OnboardingForm;
