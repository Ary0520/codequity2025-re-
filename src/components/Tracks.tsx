'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, DollarSign, Palette, Code, Heart, Shield, Zap } from 'lucide-react';

const tracks = [
  {
    id: 1,
    title: 'AI & Automation',
    subtitle: 'Next-Gen Intelligence',
    description: 'Build the next-gen assistants, co-pilots, auto-workflows, or AI-native tools that people could use today to save time, create more, or make smarter decisions.',
    icon: Brain,
    color: 'neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
    tags: ['AI Assistants', 'Automation', 'Co-pilots']
  },
  {
    id: 2,
    title: 'Fintech & Crypto',
    subtitle: 'Smart Money Solutions',
    description: 'Payments. Personal finance. Banking. DeFi. On-chain tools. Build something that makes money smarter or systems more open — and feels ready to use.',
    icon: DollarSign,
    color: 'electric-purple',
    bgColor: 'bg-electric-purple/10',
    borderColor: 'border-electric-purple/30',
    tags: ['Payments', 'DeFi', 'Banking']
  },
  {
    id: 3,
    title: 'Creator & E-commerce Tools',
    subtitle: 'Creator Economy',
    description: 'From content workflows to ecom enablers, build products for creators, sellers, and indie brands. Think tools that could live in someone\'s browser tab all day.',
    icon: Palette,
    color: 'neon-amber',
    bgColor: 'bg-neon-amber/10',
    borderColor: 'border-neon-amber/30',
    tags: ['Content Tools', 'E-commerce', 'Creator Economy']
  },
  {
    id: 4,
    title: 'DevTools & SaaS',
    subtitle: 'Build for Builders',
    description: 'Build for the builders. Whether it\'s a better deploy flow, a slicker dashboard, or a niche SaaS idea, ship a dev-first product that solves real problems.',
    icon: Code,
    color: 'blood-orange',
    bgColor: 'bg-blood-orange/10',
    borderColor: 'border-blood-orange/30',
    tags: ['Developer Tools', 'SaaS', 'Dashboards']
  },
  {
    id: 5,
    title: 'Health, EdTech & More',
    subtitle: 'Human Impact',
    description: 'Want to change lives? Tackle education, healthcare, wellness — anything that makes humans better. Practical, usable MVPs that make impact feel inevitable.',
    icon: Heart,
    color: 'electric-purple',
    bgColor: 'bg-electric-purple/10',
    borderColor: 'border-electric-purple/30',
    tags: ['Healthcare', 'Education', 'Wellness']
  },
  {
    id: 6,
    title: 'Blockchain & Web3',
    subtitle: 'Decentralized Future',
    description: 'Smart contracts, wallets, identity, or utility-first dApps. Show us how Web3 can be real, usable, and not just hype.',
    icon: Shield,
    color: 'neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
    tags: ['Smart Contracts', 'dApps', 'Web3 Identity']
  },
  {
    id: 7,
    title: 'Wildcard / Open Innovation',
    subtitle: 'Your Vision, Your Rules',
    description: 'Can\'t be boxed in? Perfect. Build anything that deserves to exist. The only rule: it must work, and we must want to use it.',
    icon: Zap,
    color: 'neon-amber',
    bgColor: 'bg-neon-amber/10',
    borderColor: 'border-neon-amber/30',
    tags: ['Innovation', 'Open Track', 'Creative']
  }
];

const Tracks = () => {
  return (
    <section id="tracks" className="py-20 lg:py-32 bg-tech-grey">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-white">Choose Your</span>{' '}
            <span className="text-neon-green">Track</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Each track is a real-world lane where MVPs can shine. Choose one. Or go wild.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className={`h-full bg-tech-black/50 border-tech-grey-light hover:${track.borderColor} transition-all duration-300 overflow-hidden relative`}>
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 ${track.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${track.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-6 w-6 text-${track.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                        Track {track.id}
                      </Badge>
                    </div>
                    <CardTitle className="font-space-grotesk text-xl text-white group-hover:text-white transition-colors">
                      {track.title}
                    </CardTitle>
                    <CardDescription className={`text-${track.color} font-medium`}>
                      {track.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-gray-300 mb-6 line-height-relaxed">
                      {track.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {track.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-tech-grey-light text-gray-300 hover:bg-tech-grey transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;