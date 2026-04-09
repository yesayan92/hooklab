import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PROBLEM_IMG = "https://media.base44.com/images/public/69d74d88e7d7f537e4a07dee/be9716c21_generated_a39bf240.png";

const problems = [
  { id: '01', text: 'Видео есть — заявок нет' },
  { id: '02', text: 'Подрядчики делают красиво, но неэффективно' },
  { id: '03', text: 'Креативы не тестируются' },
  { id: '04', text: 'Решения принимаются на ощущениях' },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={PROBLEM_IMG}
          alt="Fractured data visualization"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-sm tracking-widest uppercase text-background/40 mb-6">
              Проблема
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Большинство компаний сливают бюджет не из-за рекламы.
            </h2>
            <p className="mt-6 text-2xl md:text-3xl font-heading text-accent font-semibold">
              А из-за креативов.
            </p>
          </motion.div>

          <div className="space-y-0">
            {problems.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group border-b border-background/10 py-6 md:py-8 hover:border-accent/50 transition-colors duration-500 cursor-default"
              >
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm text-background/30 group-hover:text-accent transition-colors duration-500 mt-1">
                    {p.id}
                  </span>
                  <p className="text-lg md:text-xl text-background/80 group-hover:text-background transition-colors duration-500">
                    {p.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}