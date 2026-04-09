import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = ['Гипотезы', 'Креативы', 'Тест', 'Масштаб'];

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-background py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Решение
          </p>
          <h2 className="font-heading font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
            Мы не снимаем видео.
          </h2>
          <p className="mt-4 font-heading font-semibold text-2xl md:text-4xl text-accent">
            Мы строим систему креативов, которая приводит заявки.
          </p>
        </motion.div>

        {/* System flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="relative border border-border/50 bg-secondary/30 p-8 md:p-14">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'linear-gradient(hsl(var(--foreground)) 0.5px, transparent 0.5px), linear-gradient(90deg, hsl(var(--foreground)) 0.5px, transparent 0.5px)',
                backgroundSize: '60px 60px'
              }}
            />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-4 md:gap-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-foreground flex items-center justify-center mb-4">
                      <span className="font-mono text-sm font-medium text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="font-heading font-semibold text-base md:text-lg text-foreground">
                      {step}
                    </span>
                  </motion.div>

                  {i < steps.length - 1 && (
                    <div className="hidden md:flex items-center mx-6 lg:mx-10">
                      <div className="w-12 lg:w-20 h-px bg-border relative">
                        <motion.div
                          className="absolute top-0 left-0 h-px bg-accent"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: '100%' } : {}}
                          transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                        />
                      </div>
                      <ArrowRight className="w-4 h-4 text-accent ml-1" />
                    </div>
                  )}

                  {i < steps.length - 1 && (
                    <div className="flex md:hidden items-center">
                      <div className="w-px h-6 bg-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}