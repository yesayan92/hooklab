import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Film, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    title: 'Аналитика',
    desc: 'Разбираем продукт, аудиторию и рекламу',
    Icon: Search,
  },
  {
    num: '02',
    title: 'Гипотезы',
    desc: 'Создаём идеи, хуки и смыслы',
    Icon: Lightbulb,
  },
  {
    num: '03',
    title: 'Производство',
    desc: 'Съёмка / UGC / вариации',
    Icon: Film,
  },
  {
    num: '04',
    title: 'Тест и масштаб',
    desc: 'Оставляем только рабочие решения',
    Icon: TrendingUp,
  },
];

export default function ProcessSection({ onCTAClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-secondary py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Процесс
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground max-w-3xl">
            Простой процесс.
            <br />
            Чёткий результат.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-20">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-background border border-border p-8 hover:border-foreground/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-sm text-muted-foreground">
                  {step.num}
                </span>
                <step.Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 text-center"
        >
          <button
            onClick={onCTAClick}
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-base font-medium tracking-wide hover:opacity-90 transition-all duration-300"
          >
            Разобрать проект
          </button>
        </motion.div>
      </div>
    </section>
  );
}