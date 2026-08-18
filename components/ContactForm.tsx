"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const inputBase =
  "mt-1.5 w-full rounded-xl border px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink/35 focus:ring-2 focus:ring-offset-0";
const inputValid =
  "border-sand bg-paper focus:border-forest focus:ring-forest/15";
const inputError = "border-red-300 bg-red-50/40 focus:border-red-400 focus:ring-red-100";

const industryOptions = [
  "Restaurants & hospitality",
  "Contractors & skilled trades",
  "Automotive, salvage, or recycling",
  "Healthcare or residential care",
  "Retail or local services",
  "Professional services",
  "Other small business",
];

const serviceOptions = [
  "Bookkeeping",
  "Catch-up / cleanup",
  "Payroll support",
  "QuickBooks support",
  "Financial reporting",
  "Business advisory",
  "Not sure yet",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    state: "",
    industry: "",
    services: [] as string[],
    switching: "",
    contactMethod: "email",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const next: Record<string, string> = {};
    if (!formData.name.trim()) next.name = "Name is required";
    if (!formData.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Please enter a valid email";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      next.message = "Please share a short note (at least 10 characters)";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const toggleService = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(option)
        ? prev.services.filter((item) => item !== option)
        : [...prev.services, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setState("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setState("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          state: "",
          industry: "",
          services: [],
          switching: "",
          contactMethod: "email",
          message: "",
        });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Full name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            className={`${inputBase} ${errors.name ? inputError : inputValid}`}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? (
            <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
              {errors.name}
            </p>
          ) : null}
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={`${inputBase} ${errors.email ? inputError : inputValid}`}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? (
            <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
              {errors.email}
            </p>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Phone</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={`${inputBase} ${inputValid}`}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Business name</span>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            autoComplete="organization"
            className={`${inputBase} ${inputValid}`}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">State</span>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`${inputBase} ${inputValid}`}
          >
            <option value="">Select…</option>
            <option value="Virginia">Virginia</option>
            <option value="North Carolina">North Carolina</option>
            <option value="Indiana">Indiana</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Industry</span>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`${inputBase} ${inputValid}`}
          >
            <option value="">Select…</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">What do you need help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {serviceOptions.map((option) => {
            const selected = formData.services.includes(option);
            return (
              <label
                key={option}
                className={`cursor-pointer rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                  selected
                    ? "bg-forest text-white ring-forest"
                    : "bg-paper text-ink/80 ring-sand hover:ring-forest/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={selected}
                  onChange={() => toggleService(option)}
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">I want to switch providers</span>
          <select
            name="switching"
            value={formData.switching}
            onChange={handleChange}
            className={`${inputBase} ${inputValid}`}
          >
            <option value="">Select…</option>
            <option value="yes">Yes, I want to switch</option>
            <option value="considering">I am considering it</option>
            <option value="no">No, this would be new support</option>
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Preferred contact method</span>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className={`${inputBase} ${inputValid}`}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="either">Either is fine</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-ink">Tell us about your business</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`${inputBase} resize-y ${errors.message ? inputError : inputValid}`}
          placeholder="What is working, what is not, and what you need from accounting support."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
            {errors.message}
          </p>
        ) : null}
      </label>

      <p className="text-sm text-ink/60">
        After you submit, we’ll review your note and follow up to schedule a
        conversation—typically within one business day.
      </p>

      <div aria-live="polite">
        {state === "success" && (
          <div className="rounded-xl bg-mist p-4 ring-1 ring-forest/20">
            <p className="text-sm font-medium text-ink">
              Thanks — your message was received. We’ll follow up to schedule a
              conversation. If you need something sooner, email{" "}
              <a className="font-semibold underline" href="mailto:info@vandyaccounting.com">
                info@vandyaccounting.com
              </a>
              .
            </p>
          </div>
        )}
        {state === "error" && (
          <div className="rounded-xl bg-red-50 p-4 ring-1 ring-red-200">
            <p className="text-sm font-medium text-red-900">
              Something went wrong. Please try again or email us directly at{" "}
              <a className="underline" href="mailto:info@vandyaccounting.com">
                info@vandyaccounting.com
              </a>
              .
            </p>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
