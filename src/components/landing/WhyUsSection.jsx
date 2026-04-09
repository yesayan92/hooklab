import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FlaskConical, Target, Users, BarChart3 } from 'lucide-react';

const reasons = [
  { text: 'Тестируем, а не угадываем', Icon: FlaskConical },
  { text: 'Делаем эффективно, а не красиво', Icon: Target },
  { text: 'Работаем как часть команды', Icon: Users },
  { text: 'Ориентируемся на цифры', Icon: BarChart3 },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-background py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Почему мы
            </p>
            <h2 className="font-heading font-semibold text-3xl md:text-5xl leading-tight tracking-tight text-foreground">
              Мы не делаем
              <br />
              просто видео.
            </h2>
            <p className="mt-4 font-heading font-semibold text-2xl md:text-3xl text-accent">
              Мы работаем на результат.
            </p>
          </motion.div>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-6 p-6 border border-border hover:border-foreground/20 transition-all duration-500"
              >
                <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center">
                  <r.Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-base md:text-lg text-foreground font-medium">
                  {r.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}