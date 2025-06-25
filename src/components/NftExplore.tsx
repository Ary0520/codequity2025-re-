"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

type NftItem = {
  name: string;
  description: string;
  image: string;
};

interface NftExploreProps {
  isExplorePage?: boolean;
  onBackHome?: () => void;
}

const nftItems: NftItem[] = [
  {
    name: "Stormfang",
    description: "A fantasy weapon named “Stormfang” floating in the center, crackling with blue lightning energy. Background: a raging thunderstorm with electric bolts. Inside a square ornate golden frame like a rare trading card. “Stormfang” engraved in gold at the bottom.",
    image: "/public/img/nftkaraforge/1.png",
  },
  {
    name: "Frostbite Edge",
    description: "A fantasy weapon named “Frostbite Edge” floating in the center, radiating icy blue frost. Background: snowy frozen tundra with falling snow and ruins. Inside a square ornate golden frame. “Frostbite Edge” engraved in gold at the bottom.",
    image: "/public/img/nftkaraforge/2.png",
  },
  {
    name: "Inferno Shard",
    description: "A flaming short blade named “Inferno Shard” glowing red-orange, surrounded by sparks. Background: flowing lava, volcanic heatwaves. Inside a golden square frame. “Inferno Shard” engraved in gold at the bottom.",
    image: "/public/img/nftkaraforge/3.png",
  },
  {
    name: "Shadow Razor",
    description: "Twin dark daggers named “Shadow Razor” hovering in the center with a smoky aura. Background: moonlit shadows and foggy night alley. Framed inside a golden square card. “Shadow Razor” engraved in gold at the bottom.",
    image: "/public/img/nftkaraforge/4.png",
  },
  {
    name: "Verdant Cleaver",
    description: "A leaf-blade sword named “Verdant Cleaver” glowing green. Background: overgrown jungle with glowing insects and moss. Square golden card frame. “Verdant Cleaver” engraved in gold at the bottom.",
    image: "/public/img/nftkaraforge/5.png",
  },
  {
    name: "Crimson Fang",
    description: "A blood-stained knife named “Crimson Fang” glowing crimson red. Background: battlefield ruins with torn flags and smoke. Inside a square golden ornate frame. “Crimson Fang” engraved in gold.",
    image: "/public/img/nftkaraforge/6.png",
  },
  {
    name: "Celestial Saber",
    description: "A sleek starforged katana named “Celestial Saber” glowing with cosmic light. Background: glowing nebula and stars. Inside a square golden trading card frame. “Celestial Saber” engraved in gold.",
    image: "/public/img/nftkaraforge/7.png",
  },
  {
    name: "Abyss Fang",
    description: "A black ritual knife named “Abyss Fang” with red glowing runes. Background: ancient dark temple with red magic symbols. Square golden frame. “Abyss Fang” engraved in gold.",
    image: "/public/img/nftkaraforge/8.png",
  },
  {
    name: "Windpiercer",
    description: "A rapier named “Windpiercer” glowing light blue, swirling wind around it. Background: floating sky islands and clouds. Square ornate golden frame. “Windpiercer” engraved in gold.",
    image: "/public/img/nftkaraforge/9.png",
  },
  {
    name: "Runesteel Claymore",
    description: "A massive sword named “Runesteel Claymore” etched with glowing runes. Background: ancient ruins with magical light. Inside a golden square collectible frame. “Runesteel Claymore” engraved in gold.",
    image: "/public/img/nftkaraforge/10.png",
  },
];

const NftExplore = ({ isExplorePage = false, onBackHome }: NftExploreProps) => {
  const [selectedNft, setSelectedNft] = useState<NftItem | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedNft(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-tech-black text-white overflow-x-hidden">
      <Navbar isExplorePage={isExplorePage} onBackHome={onBackHome} />

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <h1 className="font-space-grotesk font-bold text-4xl mb-6 text-neon-green">
          Unleash the Legends – Win Exclusive NFTs!
        </h1>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          Every participant in the hackathon will receive a unique unlock code to redeem a random NFT weapon.
          These digital artifacts are more than just collectibles — they represent your journey, grit, and creativity.
        </p>
        <p className="text-gray-300 text-lg mb-4 max-w-3xl">
          The top 10 teams will be rewarded with the full legendary set of all 10 NFTs – each one symbolizing a different elemental force and innovation theme.
        </p>
        <p className="text-gray-300 text-lg max-w-3xl">
          Save your code, connect your wallet, and forge your digital identity. These NFTs will unlock secret perks in future events and partner projects!
        </p>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <h2 className="font-space-grotesk font-semibold text-3xl mb-8 text-white text-center">
          Explore the NFT Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {nftItems.map((nft, index) => (
            <motion.div
              key={index}
              className="bg-tech-grey/20 rounded-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedNft(nft)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={nft.image}
                alt={nft.name}
                width={300}
                height={200}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="font-space-grotesk font-bold text-lg text-neon-green mb-2 text-center">
                {nft.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {selectedNft && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedNft(null);
          }}
        >
          <div className="bg-tech-black rounded-lg max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-neon-green text-2xl font-bold"
              onClick={() => setSelectedNft(null)}
            >
              &times;
            </button>
            <img
              src={selectedNft.image}
              alt={selectedNft.name}
              width={500}
              height={300}
              className="w-full h-64 object-contain rounded-md mb-4"
            />
            <h3 className="font-space-grotesk font-bold text-2xl text-neon-green mb-2">
              {selectedNft.name}
            </h3>
            <p className="text-gray-300">{selectedNft.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftExplore;
