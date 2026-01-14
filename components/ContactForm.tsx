'use client';

import { useState } from 'react';
import PrimaryButton from '@/components/PrimaryButton';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
        // Reset success message after 5 seconds
        setTimeout(() => setState('idle'), 5000);
      } else {
        setState('error');
        setTimeout(() => setState('idle'), 5000);
      }
    } catch {
      setState('error');
      setTimeout(() => setState('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <div className="text-sm font-semibold text-slate-900">Name</div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 outline-none transition-smooth focus:ring-2 ${
            errors.name
              ? 'ring-red-300 focus:ring-red-400'
              : 'ring-slate-200/70 focus:ring-slate-300'
          }`}
          placeholder="Your name"
          autoComplete="name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </label>

      <label className="block">
        <div className="text-sm font-semibold text-slate-900">Email</div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-2 w-full rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 outline-none transition-smooth focus:ring-2 ${
            errors.email
              ? 'ring-red-300 focus:ring-red-400'
              : 'ring-slate-200/70 focus:ring-slate-300'
          }`}
          placeholder="you@company.com"
          autoComplete="email"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </label>

      <label className="block">
        <div className="text-sm font-semibold text-slate-900">Message</div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`mt-2 w-full resize-none rounded-xl bg-white px-4 py-3 text-slate-900 ring-1 outline-none transition-smooth focus:ring-2 ${
            errors.message
              ? 'ring-red-300 focus:ring-red-400'
              : 'ring-slate-200/70 focus:ring-slate-300'
          }`}
          placeholder="What are you looking for help with? (bookkeeping, cleanup, budgeting, close, etc.)"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </label>

      {/* Success message */}
      {state === 'success' && (
        <div className="animate-fade-in rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-200/70">
          <p className="text-sm font-semibold text-emerald-900">
            ✓ Message sent successfully! We'll be in touch within one business day.
          </p>
        </div>
      )}

      {/* Error message */}
      {state === 'error' && (
        <div className="animate-fade-in rounded-xl bg-red-50 p-4 ring-1 ring-red-200/70">
          <p className="text-sm font-semibold text-red-900">
            ✕ Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <div className="pt-2 space-y-2">
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed transition-smooth btn-primary focus-ring"
        >
          {state === 'loading' ? 'Sending...' : 'Submit'}
        </button>

        <p className="text-xs text-slate-600">
          After you submit, we'll review your note and respond within{' '}
          <span className="font-semibold text-slate-900">one business day</span>.
        </p>
      </div>
    </form>
  );
}
