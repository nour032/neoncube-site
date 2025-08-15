import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';

export default function Hero({ onPreOrder }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {CONTENT.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12">
            {CONTENT.hero.subtitle}
          </p>
          <button
            onClick={() => onPreOrder(MODELS.S)}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-neon-blue transition-colors"
          >
            Choose your NeonCube
          </button>
        </motion.div>
      </div>
    </section>
  );
}