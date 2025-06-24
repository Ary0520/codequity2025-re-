'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Trophy } from 'lucide-react';

const stats = [
  {
    number: '1000+',
    label: 'Expected Participants',
    icon: Users,
    color: 'neon-green'
  },
  {
    number: '4',
    label: 'Days to Build',
    icon: Calendar,
    color: 'electric-purple'
  },
  {
    number: '7',
    label: 'Tracks Available',
    icon: Trophy,
    color: 'blood-orange'
  }
];

const Register = () => {
  return (
    <section id="register" className="py-20 lg:py-32 bg-tech-grey relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-white">Ready to</span>{' '}
            <span className="text-neon-green">Build?</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Join builders from around the world in the ultimate coding challenge. Let the world see what you're capable of.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-${stat.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 text-${stat.color}`} />
                </div>
                <div className="font-space-grotesk font-bold text-3xl md:text-4xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Registration CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-tech-black/50 border-tech-grey-light">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-white mb-4">
                Join Codequity 2025
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Registration is free and open to all builders. Whether you're a solo hacker or building with a team, 
                this is your chance to ship something that matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-neon-green text-tech-black hover:bg-neon-green/90 font-semibold px-8 py-4 text-lg glow-effect animate-glow-pulse"
                  onClick={() => window.open('https://forms.gle/example', '_blank')}
                >
                  Register Now - It's Free!
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-500 text-gray-200 hover:text-white hover:border-electric-purple px-8 py-4 text-lg"
                  onClick={() => window.open('https://discord.gg/example', '_blank')}
                >
                 Follow Our Insta Page
                </Button>
              </div>

              <p className="text-gray-400 text-sm mt-6">
                Hackathon runs June 29 - July 2, 2025
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;