import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const REDUCTION = 0.45; // 45% avg CPL reduction

function formatNum(n) {
  return Math.round(n).toLocaleString('ru-RU');
}

export default function CalculatorSection({ onCTAClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [budget, setBudget] = useState('');
  const [cpl, setCpl] = useState('');

  const b = parseFloat(budget) || 0;
  const c = parseFloat(cpl) || 0;

  const currentLeads = c > 0 ? b / c : 0;
  const newCpl = c * (1 - REDUCTION);
  const newLeads = newCpl > 0 ? b / newCpl : 0;
  const savedBudget = currentLeads > 0 ? (newLeads - currentLeads) * c : 0;
  const hasResult = b > 0 && c > 0;

  return (
    <section ref={ref} className="bg-foreground py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-background/40 mb-6">
            Калькулятор
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tight text-background max-w-3xl leading-tight">
            Посчитайте вашу потенциальную экономию
          </h2>
          <p className="mt-4 text-background/50 text-lg max-w-xl">
            Введите текущие показатели — увидите, сколько заявок вы недополучаете
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 grid md:grid-cols-2 gap-6"
        >
          {/* Inputs */}
          <div className="border border-background/10 p-8 md:p-10 space-y-8">
            <div>
              <label className="font-mono text-xs text-background/40 tracking-widest uppercase block mb-3">
                Рекламный бюджет (₽/мес)
              </label>
              <input
                type="number"
                min="0"
                placeholder="200 000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent border-b border-background/20 focus:border-accent text-background text-2xl font-heading font-semibold pb-3 outline-none placeholder:text-background/20 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-background/40 tracking-widest uppercase block mb-3">
                Текущая стоимость заявки (₽)
              </label>
              <input
                type="number"
                min="0"
                placeholder="2 000"
                value={cpl}
                onChange={(e) => setCpl(e.target.value)}
                className="w-full bg-transparent border-b border-background/20 focus:border-accent text-background text-2xl font-heading font-semibold pb-3 outline-none placeholder:text-background/20 transition-colors duration-300"
              />
            </div>
            <p className="font-mono text-xs text-background/30">
              * Расчёт основан на среднем снижении CPL −45% по нашим кейсам
            </p>
          </div>

          {/* Results */}
          <div className="border border-background/10 p-8 md:p-10 flex flex-col justify-between gap-8">
            {hasResult ? (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border border-background/10 p-5">
                    <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">Сейчас заявок</p>
                    <p className="font-heading font-bold text-3xl text-background">{formatNum(currentLeads)}</p>
                  </div>
                  <div className="border border-accent/40 p-5 bg-accent/5">
                    <p className="font-mono text-xs text-accent/70 uppercase tracking-wider mb-2">С Hook Lab</p>
                    <p className="font-heading font-bold text-3xl text-accent">{formatNum(newLeads)}</p>
                  </div>
                  <div className="border border-background/10 p-5">
                    <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">Текущий CPL</p>
                    <p className="font-heading font-bold text-2xl text-background">{formatNum(c)} ₽</p>
                  </div>
                  <div className="border border-accent/40 p-5 bg-accent/5">
                    <p className="font-mono text-xs text-accent/70 uppercase tracking-wider mb-2">Новый CPL</p>
                    <p className="font-heading font-bold text-2xl text-accent">{formatNum(newCpl)} ₽</p>
                  </div>
                </div>

                <div className="border-t border-background/10 pt-6">
                  <p className="font-mono text-xs text-background/40 uppercase tracking-wider mb-2">
                    Дополнительных заявок в месяц
                  </p>
                  <p className="font-heading font-bold text-5xl text-accent">
                    +{formatNum(newLeads - currentLeads)}
                  </p>
                  <p className="text-background/40 text-sm mt-1">
                    при том же бюджете {formatNum(b)} ₽
                  </p>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[200px]">
                <p className="text-background/20 font-heading text-xl text-center">
                  Введите данные слева,<br />чтобы увидеть расчёт
                </p>
              </div>
            )}

            {hasResult && (
              <button
                onClick={onCTAClick}
                className="w-full bg-accent text-accent-foreground py-4 text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
              >
                Хочу столько же заявок →
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}