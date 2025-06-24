'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Users } from 'lucide-react';

const timelineEvents = [
  {
    date: 'June 29, 2025',
    title: 'Hackathon Starts',
    description: 'The challenge begins. Time to build what deserves to exist.',
    icon: Users,
    color: 'neon-green'
  },
  {
    date: 'July 2, 2025',
    title: 'Submission Deadline',
    description: 'Final deadline for all project submissions. No extensions.',
    icon: Clock,
    color: 'blood-orange'
  },
  {
    date: 'July 3–4, 2025',
    title: 'Judging & Showcase',
    description: 'Projects are evaluated and showcased to the community.',
    icon: Calendar,
    color: 'electric-purple'
  },
  {
    date: 'July 5, 2025',
    title: 'Winners Announced',
    description: 'Celebrate the winners and the future they\'ve built.',
    icon: Trophy,
    color: 'neon-amber'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 lg:py-32 bg-tech-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-white">Important</span>{' '}
            <span className="text-neon-green">Dates</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Mark your calendar. Every moment counts in this sprint to innovation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-green via-electric-purple to-blood-orange opacity-30"></div>
            
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-tech-grey border border-tech-grey-light rounded-lg p-6 hover:border-gray-500 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 bg-${event.color}/20 rounded-full flex items-center justify-center ${isEven ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}>
                          <IconComponent className={`h-5 w-5 text-${event.color}`} />
                        </div>
                      </div>
                      <h3 className="font-space-grotesk font-semibold text-xl text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-300 mb-3">{event.description}</p>
                      <div className="text-sm text-gray-400">
                        <p className="font-medium">{event.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tech-black border-4 border-neon-green rounded-full z-10"></div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-4"
                >
                  {/* Timeline line and dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 bg-${event.color}/20 rounded-full flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 text-${event.color}`} />
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-current to-transparent opacity-30 mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-tech-grey border border-tech-grey-light rounded-lg p-6">
                    <h3 className="font-space-grotesk font-semibold text-lg text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{event.description}</p>
                    <div className="text-sm text-gray-400">
                      <p className="font-medium">{event.date}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;