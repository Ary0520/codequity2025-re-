'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, ExternalLink } from 'lucide-react';

const Terms = () => {
  return (
    <section id="terms" className="py-20 lg:py-32 bg-tech-black">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="text-white">Terms &</span>{' '}
            <span className="text-neon-green">Conditions</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Important information about participation, rules, and guidelines.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-tech-grey border-tech-grey-light">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-neon-green" />
                </div>
                
                <h3 className="font-space-grotesk font-semibold text-2xl text-white mb-4">
                  Official Rules & Guidelines
                </h3>
                
                <p className="text-gray-300 mb-8">
                  Please refer to the official Terms & Conditions PDF for complete details about participation, 
                  eligibility, intellectual property rights, and competition rules.
                </p>

                <Button
  className="bg-neon-green text-tech-black hover:bg-neon-green/90 font-semibold flex items-center justify-center glow-effect mx-auto"
  onClick={() =>
    window.open(
      'https://drive.google.com/file/d/18V6TshF5VYJc9RJrE_1CSBCKy3lWtf_-/view?usp=sharing',
      '_blank'
    )
  }
>
  <FileText className="h-4 w-4 mr-2" />
  View Full T&C PDF
  <ExternalLink className="h-4 w-4 ml-2" />
</Button>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Terms;