import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CASES_IMG = "https://media.base44.com/images/public/69d74d88e7d7f537e4a07dee/b1c1ecf13_generated_252b2744.png";

const cases = [
  {
    metric: '−57%',
    metricLabel: 'к стоимости заявки',
    detail: '27 креативов → 4 рабочих',
  },
  {
    metric: '+2.1x',
    metricLabel: 'к заявкам',
    detail: '12 гипотез → 3 масштабированы',
  },
  {
    metric: '3 нед.',
    metricLabel: 'до роста продаж',
    detail: 'Смена креативов → рост продаж',
  },
];

export default function CasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-background py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Кейсы
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
              Результаты
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border border-border bg-background overflow-hidden hover:border-foreground/30 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-5">
                <img src={CASES_IMG} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="relative p-8 md:p-10">
                <div className="mb-8">
                  <span className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-accent leading-none">
                    {c.metric}
                  </span>
                  <p className="font-body text-muted-foreground text-sm mt-2">
                    {c.metricLabel}
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="font-mono text-sm text-foreground/70">
                    {c.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}