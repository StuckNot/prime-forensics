"use client";

import { useState } from "react";
import { LockKeyhole, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface ContactFormProps {
  defaultService?: string;
}

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    service: defaultService || "none",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        service: defaultService || "none",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="bg-background dark:bg-[#0A101D] p-8 md:p-12 rounded-2xl border border-secondary/20 shadow-lg relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10" />

      <div className="flex items-center gap-3 mb-8 relative z-10">
        <LockKeyhole className="text-accent" size={24} />
        <h2 className="text-2xl font-serif text-primary dark:text-white">
          Encrypted Transmission Box
        </h2>
      </div>

      {status === "success" ? (
        <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
            <CheckCircle2 className="text-green-500" size={32} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary dark:text-white mb-3">
            Transmission Received
          </h3>
          <p className="text-typography/70 max-w-sm leading-relaxed">
            Your inquiry has been securely delivered. Our team will respond
            within 24 hours via your registered email.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 text-accent text-xs font-bold tracking-widest uppercase hover:underline"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
              Email Address (Official) *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors"
              placeholder="j.doe@lawfirm.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
              Organization / Law Firm (Optional)
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors"
              placeholder="Prime Legal Associates"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
              Inquiry Type
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="bg-transparent border-b border-secondary/30 pb-2 text-primary dark:text-white focus:outline-none focus:border-accent transition-colors appearance-none outline-none"
            >
              <option value="none" className="text-black">
                Select forensic category...
              </option>
              <option value="scientific" className="text-black">
                Scientific Forensic Analysis
              </option>
              <option value="digital" className="text-black">
                Digital &amp; Cyber Forensics
              </option>
              <option value="corporate" className="text-black">
                Corporate &amp; Private Investigations
              </option>
              <option value="insurance" className="text-black">
                Insurance Fraud Investigation
              </option>
              <option value="training" className="text-black">
                Training &amp; Capacity Building
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-typography/70">
              Secure Message Details *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-secondary/5 border border-secondary/20 p-4 rounded-lg text-primary dark:text-white focus:outline-none focus:border-accent focus:bg-transparent resize-none transition-colors"
              placeholder="Describe the nature of your legal requirement. Do not include sensitive personally identifiable information (PII) in this initial form."
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <AlertCircle size={18} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-sm tracking-wider uppercase bg-accent text-primary hover:brightness-110 transition duration-200 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin mr-2" />
                  Transmitting...
                </>
              ) : (
                "Initiate Secure Transmission"
              )}
            </button>
          </div>

          <p className="text-[10px] text-center text-typography/40 tracking-widest uppercase mt-4">
            Protected by SSL encryption protocols.
          </p>
        </form>
      )}
    </div>
  );
}
