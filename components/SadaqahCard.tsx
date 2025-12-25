import React from 'react';

export default function SadaqahCard({ campaignId }: { campaignId: string }) {
  // This is the source for the LaunchGood real-time widget
  const embedUrl = `https://www.launchgood.com/scripts/widget.php?id=${campaignId}&type=standard`;

  return (
    <div className="rounded-3xl bg-[#064e3b] p-6 text-white shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-emerald-800 p-2 text-2xl">💝</div>
        <h3 className="font-serif text-xl font-bold uppercase tracking-tight">
          Everlasting Sadaqah
        </h3>
      </div>
      
      <p className="mb-6 text-emerald-50/80 text-sm leading-relaxed">
        In lieu of flowers, the family requests your contribution to his chosen water project.
      </p>

      {/* THE LIVE IFRAME REPLACES THE STATIC TEXT */}
      <div className="overflow-hidden rounded-xl bg-white/5 p-1">
        <iframe 
          src={embedUrl}
          width="100%" 
          height="480px" 
          frameBorder="0" 
          scrolling="no"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
