import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const MemorialList: React.FC<{ onSelectProfile: (profile: any) => void }> = ({ onSelectProfile }) => {
  const [profiles, setProfiles] = React.useState<any[]>([]);
  React.useEffect(() => {
    const getProfiles = async () => {
      const { data } = await supabase.from('profiles').select('*').eq('is_public', true);
      if (data) setProfiles(data);
    }; getProfiles();
    }, []);

  return (
    <div className="min-h-screen bg-stone-50 p-8 pt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-stone-900 mb-2">Community Memorials</h2>
        <p className="text-stone-600 mb-12">Honoring the legacies of our beloved community members.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map(profile => (
            <div key={profile.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all group cursor-pointer">
              <div className="aspect-square bg-stone-100 relative">
                <div className="absolute inset-0 bg-teal-900/10 group-hover:bg-transparent transition-colors" />
                <button
                  onClick={() => onSelectProfile(profile)}
                  className="absolute bottom-4 right-4 bg-white/90 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  View Legacy →
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-stone-900">{profile.full_name}</h3>
                <p className="text-stone-400 text-xs font-black uppercase tracking-widest mt-1">{profile.birth_date} - {profile.death_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemorialList;
