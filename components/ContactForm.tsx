'use client';

import { useState } from 'react';
import { CalendarCheck, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputBase =
  'mt-1.5 w-full rounded-xl border px-4 py-3.5 text-[15px] text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:ring-2 focus:ring-offset-0';
const inputValid = 'border-slate-200 bg-white focus:border-emerald-400 focus:ring-emerald-100';
const inputError = 'border-red-300 bg-red-50/30 focus:border-red-400 focus:ring-red-100';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setState('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setState('idle'), 6000);
      } else {
        setState('error');
        setTimeout(() => setState('idle'), 6000);
      }
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 6000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block">
        <span className="text-sm font-medium text-slate-700">Full Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputBase} ${errors.name ? inputError : inputValid}`}
          placeholder="Jane Smith"
          autoComplete="name"
        />
        {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700">Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputBase} ${errors.email ? inputError : inputValid}`}
          placeholder="you@company.com"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>}
      </label>

      <label className="block">
        <span className="text-sm font-medium text-slate-700">How can we help?</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputBase} resize-none ${errors.message ? inputError : inputValid}`}
          placeholder="Tell us about your business and what you need help with (bookkeeping, cleanup, budgeting, close, etc.)"
        />
        {errors.message && (
          <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>
        )}
      </label>

      {state === 'success' && (
        <div className="animate-fade-in flex items-start gap-3 rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-200">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-xs font-bold">✓</div>
          <p className="text-sm font-medium text-emerald-900">
            Message sent! We'll be in touch within one business day.
          </p>
        </div>
      )}

      {state === 'error' && (
        <div className="animate-fade-in rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
          <p className="text-sm font-medium text-red-900">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <div className="pt-1 space-y-3">
        <button
          type="submit"
          disabled={state === 'loading'}
          className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-[15px] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-lg hover:from-emerald-500 hover:to-teal-500 active:translate-y-0 active:scale-100 active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          {state === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <CalendarCheck className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              Schedule My Consultation
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          No commitment required &mdash; we'll respond within{' '}
          <span className="font-semibold text-slate-500">one business day</span>.
        </p>
      </div>
    </form>
  );
}
