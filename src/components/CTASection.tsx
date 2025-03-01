import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary-dark">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark/90" />

        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(74, 144, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(74, 144, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary-light/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-20, 20, -20],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              filter: 'blur(80px)',
              background: `radial-gradient(circle at center, rgba(74, 144, 255, ${0.15 - i * 0.03}) 0%, transparent 70%)`,
            }}
            animate={{
              x: [
                `${Math.random() * 40}%`,
                `${Math.random() * 40 + 20}%`,
                `${Math.random() * 40}%`,
              ],
              y: [
                `${Math.random() * 40}%`,
                `${Math.random() * 40 + 20}%`,
                `${Math.random() * 40}%`,
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Pronto para transformar sua presença digital?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8"
          >
            Vamos criar algo incrível juntos. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
