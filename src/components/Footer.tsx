'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUp, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/CodeQuity', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/codequitycommunity', label: 'LinkedIn' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=codequitycommunity@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-tech-black border-t border-tech-grey-light py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h3 className="font-space-grotesk font-bold text-2xl text-white mb-2">
              <span className="text-neon-green">Code</span>quity <span className="text-neon-green">2025</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Building the future, one line of code at a time.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-tech-grey-light hover:bg-neon-green/20 rounded-full flex items-center justify-center text-gray-400 hover:text-neon-green transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-tech-grey-light my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0"
          >
            © 2025 Codequity 2025. All rights reserved.
          </motion.p>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-400 hover:text-neon-green hover:border-neon-green bg-transparent"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;