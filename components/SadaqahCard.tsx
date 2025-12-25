import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

interface SadaqahProps {
  campaignId: string; // The ID from your LaunchGood URL
  title: string;
}

export default function SadaqahCard({ campaignId, title }: SadaqahProps) {
  // This is the standard LaunchGood embed URL format
  const embedUrl = `https://www.launchgood.com/scripts/widget.php?id=${campaignId}`;

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-emerald-100 overflow-hidden">
      <div className="bg-emerald-900 p-6 text-white text-center">
        <Heart className="mx-auto mb-2 text-emerald-400" fill="currentColor" size={32} />
        <h3 className="text-xl font-bold font-serif">Sadaqah Jariyah</h3>
        <p className="text-emerald-100 text-sm mt-1">{title}</p>
      </div>

      <div className="p-4">
        {/* LaunchGood Widget Embed */}
        <div className="w-full min-h-[400px] flex justify-center">
          <iframe 
            src={embedUrl}
            width="100%" 
            height="450px" 
            frameBorder="0"
            scrolling="no"
            title="LaunchGood Campaign"
            className="rounded-xl"
          ></iframe>
        </div>

        <div className="mt-4 px-2 pb-2">
          <a 
            href={`https://www.launchgood.com/${campaignId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition"
          >
            Open Full Campaign <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
