import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FormatSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-secondary py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-8">
            Формат работы
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
            Вы не покупаете ролики.
          </h2>
          <p className="mt-6 font-heading font-semibold text-2xl md:text-3xl text-accent leading-snug">
            Вы покупаете систему, которая генерирует заявки.
          </p>
          <div className="mt-12 w-20 h-px bg-accent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}