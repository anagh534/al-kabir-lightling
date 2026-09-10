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
    <section className={`py-24 bg-white overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] shadow-2xl overflow-hidden bg-white flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left Minimal Decorative Banner */}
          <div className="relative lg:w-5/12 bg-gradient-to-br from-[#090e17] to-[#042830] text-white p-10 lg:p-16 flex flex-col justify-center overflow-hidden">
            {/* Elegant lighting gradient overlay */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#009ea9]/30 via-transparent to-transparent opacity-80" />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black tracking-tight leading-[1.1] mb-6">
                Together We Build Brighter Tomorrows.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-12">
                Whether executing a commercial tower or an industrial plant in Oman, our engineering desk guarantees a transparent commercial response within 48 hours.
              </p>
            </div>
          </div>

          {/* Right Minimal Floating Label Form */}
          <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#e6f8fa] flex items-center justify-center text-[#009ea9] mb-6 shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Enquiry Received
                </h4>
                <p className="text-sm text-slate-500 max-w-xs mx-auto mb-8">
                  Our technical sales engineer will contact <strong>{formData.fullName}</strong> shortly with pricing details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", companyName: "", email: "", phone: "", message: "" });
                  }}
                  className="px-8 py-3 rounded-full text-sm font-bold text-[#009ea9] bg-[#e6f8fa] hover:bg-[#009ea9] hover:text-white transition-all shadow-sm"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-8">
                  Send Your Requirement
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Floating Label: Full Name */}
                  <div className="relative group">
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                    />
                    <label
                      htmlFor="form-name"
                      className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                    >
                      Full Name *
                    </label>
                  </div>

                  {/* Floating Label: Company */}
                  <div className="relative group">
                    <input
                      id="form-company"
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                    />
                    <label
                      htmlFor="form-company"
                      className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold"
                    >
                      Company Name
                    </label>
                  </div>

                  {/* Floating Label: Email */}
                  <div className="relative group">
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                    />
                    <label
                      htmlFor="form-email"
                      className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                    >
                      Email Address *
                    </label>
                  </div>

                  {/* Floating Label: Phone */}
                  <div className="relative group">
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                    />
                    <label
                      htmlFor="form-phone"
                      className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                    >
                      Phone Number *
                    </label>
                  </div>
                </div>

                {/* Floating Label: Message */}
                <div className="relative group pt-2">
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    placeholder="Project Details *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all resize-none placeholder-transparent"
                  />
                  <label
                    htmlFor="form-message"
                    className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                  >
                    Project Details / Requirement *
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-black text-white bg-[#009ea9] hover:bg-[#008791] active:scale-[0.98] transition-all shadow-lg hover:shadow-[#009ea9]/25 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Sending Details...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4" />
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
