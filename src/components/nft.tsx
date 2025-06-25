'use client';

import { Button } from '@/components/ui/button';

interface NftProps {
  onExplore: () => void;
}

const Nft = ({ onExplore }: NftProps) => {
  return (
    <section
      id="nft"
      className="relative h-screen w-full flex items-center justify-between bg-black px-20 overflow-hidden text-white"
      style={{
        backgroundImage: "url('/img/karaforge marketplace.png')",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* LEFT PANEL – NFT Content */}
      <div className="max-w-xl space-y-6 z-10">
        <h1 className="text-4xl font-bold leading-tight">
          Win Limited Edition Hackathon NFTs!
        </h1>
        <p className="text-lg text-gray-300">
          Participate in challenges, earn secret codes, and unlock ultra-rare digital collectibles. Top 10 hackers get **all 10 legendary NFTs**!
        </p>
        <Button
          className="bg-gradient-to-r from-red-600 via-blue-600 to-black text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:brightness-110 transition"
          onClick={onExplore}
        >
          Explore NFT
        </Button>
      </div>

      {/* RIGHT PANEL – Animated/NFT Visual */}
      <div className="relative w-96 h-96 z-10">
        <img
          src="/img/sidimg.png"
          alt="NFT Preview"
          className="rounded-2xl shadow-2xl object-contain w-full h-full"
        />
        {/* You can replace this with a rotating carousel or 3D card if needed */}
      </div>

      
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-gray-900 to-black shimmer" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-gray-900 to-black shimmer" />

      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Nft;
