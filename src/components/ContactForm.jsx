"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";


export default function ContactForm({ className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className={`py-16 bg-white overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden bg-white flex flex-col lg:flex-row">
          {/* Left Decorative Banner */}
          <div className="relative lg:w-2/5 min-h-[300px] lg:min-h-full bg-gradient-to-br from-[#090e17] via-[#005f66] to-[#009ea9] text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
            {/* Ambient decorative blur circles */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#00e5f2]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />


            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider text-cyan-200 mb-4">
                FAST COMMERCIAL RESPONSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight uppercase">
                Together We Build Brighter Tomorrows
              </h3>
            </div>

            <div className="relative z-10 pt-8">
              <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
                Whether you are executing a commercial tower, an industrial plant,
                or a residential complex in Oman, Al Kabir Lighting delivers
                comprehensive project solutions.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white">
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                <span>24–48 Hour Engineering Quotation Response</span>
              </div>
            </div>
          </div>

          {/* Right Form matching Reference Fields */}
          <div className="lg:w-3/5 p-6 sm:p-10 lg:p-12 bg-white flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Send Your Requirement
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your project or product requirement. Our team will
                get back to you with the best solution.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3 bg-[#e6f8fa]/60 rounded-2xl p-6 border border-[#009ea9]/30">
                <CheckCircle2 className="w-10 h-10 text-[#009ea9] mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">
                  Thank you! Your requirement has been received.
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  An Al Kabir technical sales engineer will contact{" "}
                  <strong>{formData.fullName}</strong> shortly with recommended
                  products and pricing.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      companyName: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-xs font-bold text-[#009ea9] hover:underline"
                >
                  Send another requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Salim Al-Ghafri"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-company"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Company Name
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      placeholder="e.g. Global EPC Consultants"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="salim@company.om"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="+968 9123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Your Message / Requirement *
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Describe project details, product requirements, or BOQ summary..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-slate-50/50 focus:bg-white resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#008791] active:scale-98 transition-all shadow-md cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
