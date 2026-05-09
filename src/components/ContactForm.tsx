"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight, CheckCircle2, AlertCircle, Calendar, Mail, Phone, User, MessageSquare } from "lucide-react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  /* ── Success State ── */
  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 gap-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-[#FA4616]/10 border border-[#FA4616]/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-[#FA4616]" />
        </div>
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
            Request Received
          </h3>
          <p className="text-slate-400 text-base leading-relaxed max-w-md">
            Capt. Jim will review your date and confirm shortly. Check your
            inbox — we&apos;ll be in touch within 24 hours.
          </p>
        </div>
        <a
          href="tel:813-917-4989"
          className="inline-flex items-center gap-2 text-[#FA4616] text-sm font-semibold hover:underline"
        >
          <Phone size={14} />
          Need faster confirmation? Call 813-917-4989
        </a>
      </div>
    );
  }

  /* ── Field helper ── */
  const inputBase =
    "w-full bg-[#0d1b2a] border border-white/10 text-white placeholder:text-slate-500 " +
    "rounded-[7px] px-4 py-3 text-sm outline-none transition-all duration-200 " +
    "focus:border-[#FA4616]/60 focus:ring-2 focus:ring-[#FA4616]/20";

  const errorBase = "border-red-500/60 focus:ring-red-500/20";

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

      {/* Full Name */}
      <div>
        <label htmlFor="cf-name" className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
          <User size={12} />
          Full Name <span className="text-[#FA4616]">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          placeholder="John Smith"
          autoComplete="name"
          className={`${inputBase} ${errors.name ? errorBase : ""}`}
          {...register("name", { required: "Full name is required." })}
        />
        {errors.name && (
          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={11} /> {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
          <Mail size={12} />
          Email Address <span className="text-[#FA4616]">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          placeholder="john@example.com"
          autoComplete="email"
          className={`${inputBase} ${errors.email ? errorBase : ""}`}
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={11} /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone + Date — side by side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="cf-phone" className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
            <Phone size={12} />
            Phone Number
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="(813) 555-0100"
            autoComplete="tel"
            className={inputBase}
            {...register("phone")}
          />
        </div>

        {/* Requested Date */}
        <div>
          <label htmlFor="cf-date" className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
            <Calendar size={12} />
            Requested Date
          </label>
          <input
            id="cf-date"
            type="date"
            className={`${inputBase} [color-scheme:dark]`}
            {...register("date")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">
          <MessageSquare size={12} />
          Message <span className="text-[#FA4616]">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell Capt. Jim what you're hoping to catch, how many people are in your party, and any other details..."
          className={`${inputBase} resize-none ${errors.message ? errorBase : ""}`}
          {...register("message", { required: "A brief message is required." })}
        />
        {errors.message && (
          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={11} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-[7px] p-4 text-red-400 text-sm">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          {serverError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="contact-form-submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#FA4616] hover:bg-[#d93a0f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-8 py-4 rounded-[7px] text-base shadow-lg hover:shadow-[#FA4616]/30 transition-all duration-300 group"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending Request...
          </>
        ) : (
          <>
            Send Booking Request
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-slate-600 text-xs text-center">
        No payment required. Capt. Jim will confirm availability and contact you directly.
      </p>
    </form>
  );
}
