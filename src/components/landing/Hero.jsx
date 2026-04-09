import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = "https://media.base44.com/images/public/69d74d88e7d7f537e4a07dee/5c0725d9a_generated_36d75281.png";

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="3D abstract geometric art"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-8">
            Performance Content Agency
          </p>

          <h1 className="font-heading font-semibold text-5xl md:text-7xl lg:text-[110px] leading-[0.95] tracking-tight text-foreground max-w-5xl">
            Контент, который
            <br />
            <span className="text-accent">приводит заявки</span>,
            <br />
            а&nbsp;не&nbsp;просмотры
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-14 max-w-xl"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Создаём и тестируем рекламные креативы.
            <br />
            Оставляем только то, что приносит прибыль.
          </p>
          <p className="mt-4 font-mono text-sm text-muted-foreground/70 tracking-wide">
            Работаем с брендами, экспертами и ecom
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-base font-medium tracking-wide hover:opacity-90 transition-all duration-300"
          >
            Разобрать проект
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/30" />
      </motion.div>
    </section>
  );
}