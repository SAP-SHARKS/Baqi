import React from 'react';

interface SadaqahCardProps {
  campaignId: string;
}

const SadaqahCard: React.FC<SadaqahCardProps> = ({ campaignId }) => {
  // Updated URL format to support newer v4 campaigns
  const embedUrl = `https://www.launchgood.com/v4/widget/${campaignId}`;

  return (
    <div className="rounded-[2rem] bg-teal-900 p-6 text-white shadow-2xl relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shadow-inner">💝</div>
          <h3 className="font-black text-xl uppercase tracking-tighter">Everlasting Sadaqah</h3>
        </div>
        
        <p className="text-teal-100 text-sm mb-6 leading-relaxed font-medium">
          In lieu of flowers, the family requests your contribution to this urgent cause in his memory.
        </p>

        <div className="overflow-hidden rounded-2xl bg-white shadow-inner min-h-[550px] relative">
          <iframe 
            src={embedUrl}
            width="100%" 
            height="550px" 
            frameBorder="0" 
            scrolling="no"
            className="rounded-xl relative z-10"
            title="LaunchGood Campaign"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SadaqahCard;
