"use client";
import React, { useState } from "react";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useI18n } from "../../i18n/provider";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8ba2b294-ca61-4772-985e-5054e37c3ba3", // You'll need to get this from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setStatus("idle");
          onClose();
        }, 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl card rounded-3xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 51 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--bg-secondary)] transition-all duration-300"
          aria-label="Close"
        >
          <X className="w-6 h-6" style={{ color: "var(--text-secondary)" }} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "var(--accent-primary)" }}>
            {t('contact.title')}
          </h2>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            {t('footer.description')}
          </p>
        </div>

        {/* Success Message */}
        {status === "success" && (
          <div
            className="mb-6 p-4 rounded-xl flex items-center gap-3"
            style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid #10b981" }}
          >
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-green-700 dark:text-green-400">
              Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div
            className="mb-6 p-4 rounded-xl flex items-center gap-3"
            style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid #ef4444" }}
          >
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            <p className="text-red-700 dark:text-red-400">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                style={{
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-primary)")}
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Your Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                style={{
                  background: "var(--bg-secondary)",
                  border: "2px solid var(--border-primary)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-primary)")}
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
              style={{
                background: "var(--bg-secondary)",
                border: "2px solid var(--border-primary)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-primary)")}
              placeholder="Project Collaboration"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
              style={{
                background: "var(--bg-secondary)",
                border: "2px solid var(--border-primary)",
                color: "var(--text-primary)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-primary)")}
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: "var(--accent-primary)",
              color: "#ffffff",
            }}
          >
            {status === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span style={{ color: "#ffffff" }}>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" style={{ color: "#ffffff" }} />
                <span style={{ color: "#ffffff" }}>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
