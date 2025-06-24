'use client';

import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="py-20 lg:py-32 bg-tech-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl lg:text-5xl mb-12 text-center">
            <span className="text-white">Welcome to</span>{' '}
            <span className="text-neon-green">Codequity 2025</span>
          </h2>

          {/* Overview Content */}
          <div className="space-y-8 text-left">
            <div className="font-inter text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200">
              <p className="mb-6">
                Welcome to the <strong className="text-neon-green">Codequity 2025</strong> — not your average hackathon. This is a high-intensity, no-fluff sprint for builders who are done chasing theory and ready to ship real things.
              </p>
              
              <p className="mb-6">
                Here, you're not just writing code. You're crafting something that could actually stand on its own in the real world — something demo-ready, usable, and worth showing off. Whether you're a solo hacker, a team of rebels, or a startup-in-the-making, this challenge is your chance to build like it's launch day.
              </p>
              
              <p className="mb-6">
                We don't care about fancy pitches or bloated docs. We care about real, functional MVPs — tools, products, platforms — the kind that you'd want to put your name on.
              </p>
              
              <p className="text-neon-green font-semibold text-xl md:text-2xl">
                This is your stage. You're not just submitting a repo. You're debuting a product.
              </p>
            </div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-neon-green font-bold text-2xl">01</span>
                </div>
                <h3 className="font-space-grotesk font-semibold text-xl mb-2 text-white">Real Products</h3>
                <p className="text-gray-300">Build demo-ready, usable MVPs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-electric-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-electric-purple font-bold text-2xl">02</span>
                </div>
                <h3 className="font-space-grotesk font-semibold text-xl mb-2 text-white">Launch Ready</h3>
                <p className="text-gray-300">Build like it's launch day</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blood-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blood-orange font-bold text-2xl">03</span>
                </div>
                <h3 className="font-space-grotesk font-semibold text-xl mb-2 text-white">Ship Quality</h3>
                <p className="text-gray-300">Products worth putting your name on</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12 p-8 bg-tech-grey/50 rounded-lg border border-tech-grey-light"
            >
              <p className="text-gray-200 text-lg md:text-xl font-medium italic">
                "This isn't about building fast. It's about building right."
              </p>
              <p className="text-neon-green font-semibold mt-4">
                Think like a founder. Build like a startup. Ship like you mean it.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;