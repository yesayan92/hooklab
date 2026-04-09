import { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', contact: '', project_info: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.contact) return;

    setLoading(true);
    await base44.entities.Lead.create({
      name: form.name,
      contact: form.contact,
      project_info: form.project_info,
      status: 'new',
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-2xl text-accent-foreground mb-2">
          Заявка отправлена
        </h3>
        <p className="text-accent-foreground/70">
          Мы свяжемся с вами в ближайшее время
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Input
          placeholder="Ваше имя"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-accent-foreground placeholder:text-accent-foreground/40 py-4 px-5 text-base focus:border-white/50 focus:ring-0"
        />
      </div>
      <div>
        <Input
          placeholder="Телефон или Telegram"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          required
          className="bg-white/10 border-white/20 text-accent-foreground placeholder:text-accent-foreground/40 py-4 px-5 text-base focus:border-white/50 focus:ring-0"
        />
      </div>
      <div>
        <Textarea
          placeholder="Кратко о проекте"
          value={form.project_info}
          onChange={(e) => setForm({ ...form, project_info: e.target.value })}
          rows={3}
          className="bg-white/10 border-white/20 text-accent-foreground placeholder:text-accent-foreground/40 py-4 px-5 text-base resize-none focus:border-white/50 focus:ring-0"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 bg-white text-foreground py-4 text-base font-semibold tracking-wide hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Оставить заявку
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}