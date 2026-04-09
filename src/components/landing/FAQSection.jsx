import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: 'Сколько нужен бюджет?',
    a: 'От 100–200 тыс ₽ на тест. Это минимум, чтобы получить статистически значимые данные и понять, какие связки работают.',
  },
  {
    q: 'Что если не зайдёт?',
    a: 'Работаем через гипотезы — тестируем разные подходы и ищем рабочие связки. Мы не ставим на один вариант.',
  },
  {
    q: 'Вы запускаете рекламу?',
    a: 'Можем подключиться к запуску или работать с вашей командой / подрядчиком. Гибко подстраиваемся под ваш процесс.',
  },
];

export default function FAQSection({ onCTAClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-background py-28 md:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
            FAQ
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl tracking-tight text-foreground mb-12">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-heading font-semibold text-base md:text-lg hover:no-underline hover:text-accent transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <button
            onClick={onCTAClick}
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-base font-medium tracking-wide hover:opacity-90 transition-all duration-300"
          >
            Получить предложение
          </button>
        </motion.div>
      </div>
    </section>
  );
}