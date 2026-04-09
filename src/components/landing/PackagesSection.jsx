import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Тест',
    description: 'Старт для проверки гипотез',
    items: ['10–15 креативов', '2–3 гипотезы', 'Срок 7–10 дней'],
    result: 'Понимание, что работает',
    price: 'от 100 000 ₽',
    featured: false,
  },
  {
    name: 'Рост',
    description: 'Системный подход',
    items: ['30+ креативов', 'Несколько сценариев', 'Вариации', 'Аналитика'],
    result: 'Снижение стоимости заявки и рост объёма',
    price: 'от 200 000 ₽',
    featured: true,
  },
  {
    name: 'Система',
    description: 'Постоянный поток заявок',
    items: ['Ежемесячное производство', 'Тест гипотез', 'Масштабирование', 'Работа как команда'],
    result: 'Стабильный рост',
    price: 'от 300 000 ₽ / мес',
    featured: false,
  },
];

export default function PackagesSection({ onCTAClick }) {
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
            Пакеты
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground">
            Выберите формат
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 md:mt-20">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col border bg-background hover:border-foreground/30 transition-all duration-500 ${
                pkg.featured ? 'border-accent md:-mt-4 md:mb-0' : 'border-border'
              }`}
            >
              {pkg.featured && (
                <div className="bg-accent text-accent-foreground text-center py-2 font-mono text-xs tracking-widest uppercase">
                  Популярный
                </div>
              )}

              <div className="flex flex-col flex-1 p-8 md:p-10">
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border mb-8">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Результат
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    {pkg.result}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="font-heading font-bold text-2xl text-foreground mb-6">
                    {pkg.price}
                  </p>
                  <button
                    onClick={onCTAClick}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                      pkg.featured
                        ? 'bg-accent text-accent-foreground hover:opacity-90'
                        : 'bg-foreground text-background hover:opacity-90'
                    }`}
                  >
                    Получить предложение
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}