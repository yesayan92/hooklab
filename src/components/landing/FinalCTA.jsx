import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import LeadForm from './LeadForm';

export default function FinalCTA({ formRef }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={(node) => {
        ref.current = node;
        if (formRef) formRef.current = node;
      }}
      className="relative bg-accent overflow-hidden"
    >
      {/* Gradient overlay for warmth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/90 to-accent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight text-accent-foreground">
              Разберём ваш проект и покажем, где вы теряете деньги
            </h2>
            <p className="mt-6 text-lg text-accent-foreground/70 max-w-md">
              Заполните форму — мы проанализируем ваш проект и подготовим предложение
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}