"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  UploadCloud,
  FileText,
  Briefcase,
  Layers,
  Receipt,
  HelpCircle,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { productCategories } from "@/data/categories";
import { companyInfo } from "@/data/company";
import { branches } from "@/data/branches";
import { faqs } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    fileName: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get("subject");
      if (subjectParam) {
        setFormData((prev) => ({ ...prev, subject: subjectParam }));
      }
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files[0].name,
      }));
    }
  };

  const departmentIcons = [Briefcase, Layers, Receipt, HelpCircle];


  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Direct Access to Our Commercial Quotation, Project Engineering & Logistics Teams"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* 1. Direct Department Contacts (Docx Page 11) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#009ea9]">
                Department Directory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Reach the Correct Team Directly
              </h2>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                Skip the general inbox. Connect directly with our specialized engineering, sales, and logistics desks for rapid project processing and technical support.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.departments.map((dept, idx) => {
              const Icon = departmentIcons[idx] || Briefcase;
              return (
                <ScrollReveal key={idx} direction="up" distance={20} delay={idx * 100}>
                  <div className="group relative bg-white rounded-[2rem] p-6 lg:p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-[#009ea9]/10 transition-all duration-500 flex flex-col h-full overflow-hidden">
                    {/* Hover Gradient Wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#e6f8fa]/0 via-transparent to-[#009ea9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col flex-grow">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-[#009ea9] group-hover:border-[#009ea9] text-slate-400 group-hover:text-white transition-all duration-500 flex items-center justify-center mb-6 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#009ea9] transition-colors mb-2">
                        {dept.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed flex-grow">
                        {dept.role}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-[#009ea9]/20 transition-colors">
                      <a
                        href={`mailto:${dept.email}`}
                        className="text-[13px] font-bold text-slate-600 group-hover:text-[#009ea9] transition-colors flex items-center gap-2 truncate"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        <span className="truncate">{dept.email}</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Contact Information & Interactive Form Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Company Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#009ea9]">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  We Are Here to Assist Your Projects
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Have an enquiry, BOQ tender, or specification question? Visit
                  our Muscat showroom or connect with our team via telephone,
                  email, or instant WhatsApp.
                </p>
              </div>

              {/* Main Info Box */}
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0 text-[#009ea9]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Showroom &amp; Head Office
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0 text-[#009ea9]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Telephone &amp; Mobile
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Tel:{" "}
                      <a
                        href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}
                        className="font-medium text-slate-900 hover:text-[#009ea9]"
                      >
                        {companyInfo.phone}
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Direct:{" "}
                      <a
                        href={`tel:${companyInfo.mobile.replace(/\s+/g, "")}`}
                        className="font-medium text-slate-900 hover:text-[#009ea9]"
                      >
                        {companyInfo.mobile}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0 text-[#009ea9]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      General Email
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="hover:text-[#009ea9]"
                      >
                        {companyInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center shrink-0 text-[#009ea9]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Working Hours
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {companyInfo.hours}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Friday: Closed | Saturday: Available on Project Request
                    </p>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp ({companyInfo.whatsappFormatted})</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Contact Form matching PAGE 11 of Docx (7 cols) */}
            <div id="quote-form" className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 scroll-mt-24">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
                  Send Message
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                  Submit Your Project Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below. For BOQ submittals or tender drawings,
                  you can attach your files directly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-[#e6f8fa]/60 rounded-2xl p-6 border border-[#009ea9]/30">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-xs flex items-center justify-center text-[#009ea9]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry
                    regarding &quot;{formData.subject}&quot; has been routed to
                    the respective department. We will revert with technical and
                    commercial details shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        mobile: "",
                        subject: "Sales & Project Quotation",
                        message: "",
                        fileName: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#009ea9] hover:bg-[#008791] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Floating Label: Full Name */}
                    <div className="relative group">
                      <input
                        id="c-name"
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="c-name"
                        className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Floating Label: Company */}
                    <div className="relative group">
                      <input
                        id="c-company"
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="c-company"
                        className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:font-bold"
                      >
                        Company Name
                      </label>
                    </div>

                    {/* Floating Label: Email */}
                    <div className="relative group">
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="c-email"
                        className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                      >
                        Email Address *
                      </label>
                    </div>

                    {/* Floating Label: Mobile */}
                    <div className="relative group">
                      <input
                        id="c-mobile"
                        type="tel"
                        required
                        placeholder="Mobile / WhatsApp *"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all placeholder-transparent"
                      />
                      <label
                        htmlFor="c-mobile"
                        className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                      >
                        Mobile / WhatsApp *
                      </label>
                    </div>
                  </div>

                  {/* Category Dropdown (Floating Label Style) */}
                  <div className="relative group pt-1">
                    <select
                      id="c-category"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a product category (Optional)</option>
                      {productCategories.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                      {!productCategories.find(c => c.name === formData.subject) && formData.subject !== "" && (
                         <option value={formData.subject}>{formData.subject}</option>
                      )}
                    </select>
                    <ChevronDown className="absolute right-5 top-[1.35rem] w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#009ea9] transition-colors" />
                    <label
                      htmlFor="c-category"
                      className="absolute left-5 top-2 text-[10px] font-bold text-slate-400 transition-all pointer-events-none"
                    >
                      Product Category (Optional)
                    </label>
                  </div>

                  {/* Floating Label: Message */}
                  <div className="relative group pt-1">
                    <textarea
                      id="c-message"
                      required
                      rows={4}
                      placeholder="Project Details *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="peer w-full px-5 pt-6 pb-2 text-sm bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-[#009ea9] focus:bg-white focus:ring-4 focus:ring-[#009ea9]/10 transition-all resize-none placeholder-transparent"
                    />
                    <label
                      htmlFor="c-message"
                      className="absolute left-5 top-4 text-sm font-medium text-slate-400 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-[#009ea9] peer-focus:font-bold peer-valid:top-2 peer-valid:text-[10px] peer-valid:font-bold"
                    >
                      Your Message *
                    </label>
                  </div>

                  <div className="pt-2">
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

      {/* 3. Google Maps Location Section */}
      <section className="bg-slate-50 py-16 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
              Location &amp; Showroom
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Visit Our {companyInfo.city} Headquarters
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Conveniently situated at {companyInfo.address}.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white h-80 sm:h-96 relative">
            <iframe
              title={`${companyInfo.name} ${companyInfo.city} Location`}
              src={branches[0].mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Consultants & Contractors) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#009ea9]">
              Support &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Helpful information for contractors, procurement teams, and
              consultants.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80"
              >
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
