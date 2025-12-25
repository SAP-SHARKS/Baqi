import React from 'react';

interface SadaqahCardProps {
  campaignId: string;
}

const SadaqahCard: React.FC<SadaqahCardProps> = ({ campaignId }) => {
  // Use the standard script URL which is the most widely supported
  const embedUrl = `https://www.launchgood.com/scripts/widget.php?id=${campaignId}&type=standard`;

  return (
    <div className="rounded-[2rem] bg-teal-900 p-6 text-white shadow-2xl relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl shadow-inner">💝</div>
          <h3 className="font-black text-xl uppercase tracking-tighter">Everlasting Sadaqah</h3>
        </div>
        
        <p className="text-teal-100 text-sm mb-6 leading-relaxed font-medium">
          In memory of the deceased, the family requests your contribution to this cause.
        </p>

        <div className="overflow-hidden rounded-2xl bg-white shadow-inner min-h-[480px]">
          <iframe 
            src={embedUrl}
            width="100%" 
            height="480px" 
            frameBorder="0" 
            scrolling="no"
            className="rounded-xl"
            title="LaunchGood Campaign"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SadaqahCard;
