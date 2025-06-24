'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Github, Video, FileText, ExternalLink, AlertTriangle } from 'lucide-react';

const requirements = [
  {
    icon: Github,
    title: 'Public GitHub Repository',
    description: 'Your full code must be available in a public GitHub repository',
    color: 'neon-green'
  },
  {
    icon: Video,
    title: '2–3 Minute Demo Video',
    description: 'Show your product in action with a clear demonstration',
    color: 'electric-purple'
  },
  {
    icon: FileText,
    title: 'Clear Tech Stack Description',
    description: 'Document your technology choices and basic architecture',
    color: 'blood-orange'
  },
  {
    icon: ExternalLink,
    title: 'Live Deployed Version',
    description: 'One link to a live, working version of your product (if applicable)',
    color: 'neon-amber'
  }
];

const Submission = () => {
  return (
    <section id="submission" className="py-20 lg:py-32 bg-tech-grey">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-white">Submission</span>{' '}
            <span className="text-neon-green">Requirements</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to submit your MVP and showcase your work.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="font-space-grotesk font-semibold text-2xl text-white mb-8 flex items-center">
              <CheckCircle className="h-6 w-6 text-neon-green mr-3" />
              Your submission must include:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="bg-tech-black/50 border-tech-grey-light hover:border-gray-500 transition-all duration-300 hover:scale-105 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-${req.color}/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`h-6 w-6 text-${req.color}`} />
                          </div>
                          <div>
                            <h4 className="font-space-grotesk font-semibold text-lg text-white mb-2">
                              {req.title}
                            </h4>
                            <p className="text-gray-300">{req.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Important Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 bg-blood-orange/10 border border-blood-orange/30 rounded-lg"
          >
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-6 w-6 text-blood-orange flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-space-grotesk font-semibold text-lg text-blood-orange mb-3">
                  Important: No Recycled Projects
                </h4>
                <p className="text-gray-200 mb-4">
                  <strong>No recycled</strong> or previously submitted hackathon projects will be accepted. 
                  Your submission must be built specifically for Codequity 2025.
                </p>
                <p className="text-gray-300 text-sm">
                  We're looking for fresh innovation and original work that demonstrates your current capabilities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Submission;