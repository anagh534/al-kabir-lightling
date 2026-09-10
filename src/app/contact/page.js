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
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    subject: "Sales & Project Quotation",
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

  const faqs = [
    {
      q: "How quickly can Al Kabir Lighting provide an RFQ / commercial quote?",
      a: "For standard lighting fixtures and electrical accessories with ready specifications, our commercial sales desk provides itemized quotations within 24 hours. For extensive BOQ take-offs and custom architectural luminaires requiring manufacturer factory confirmation, turnaround is typically 48 hours.",
    },
    {
      q: "Do you supply Dialux / Relux Lux calculations for consultant approval?",
      a: "Yes. Our in-house technical engineering team prepares complete 3D photometric simulations, illuminance heatmaps, and compliance schedules matching Oman Municipality and CIBSE standards.",
    },
    {
      q: "Are your products compliant with Oman government and ministry standards?",
      a: "All luminaires, emergency escape systems, and electrical cables supplied by Al Kabir Lighting carry valid international compliance documentation (CE, CB, RoHS, ATEX, BS EN) and meet the requirements of Oman Civil Defence, Nama Electricity Distribution, and Ministry of Housing & Urban Planning specifications.",
    },
    {
      q: "Can contractors inspect physical luminaire samples before ordering?",
      a: "Yes. We maintain a curated sample library at our Muscat Showroom (Al Khuwair) and can coordinate mockup samples directly for consultant and client review sessions.",
    },
  ];

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
                    href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Al%20Kabir%20Lighting,%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20pricing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+968 9123 4567)</span>
                  </a>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="p-5 rounded-2xl bg-[#e6f8fa]/70 border border-[#009ea9]/20 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    Need on-site engineering assistance?
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Our technical team can visit your project site or consultant office.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#009ea9] shrink-0">
                  Muscat HQ
                </span>
              </div>
            </div>

            {/* Right: Contact Form matching PAGE 11 of Docx (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        placeholder="e.g. Eng. Tariq Al-Harthy"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label
                        htmlFor="c-company"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Company / Organization
                      </label>
                      <input
                        id="c-company"
                        type="text"
                        placeholder="e.g. Muscat Construction LLC"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            company: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="c-email"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        placeholder="tariq@company.om"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label
                        htmlFor="c-mobile"
                        className="block text-xs font-semibold text-slate-700 mb-1"
                      >
                        Mobile / WhatsApp *
                      </label>
                      <input
                        id="c-mobile"
                        type="tel"
                        required
                        placeholder="+968 9123 4567"
                        value={formData.mobile}
                        onChange={(e) =>
                          setFormData({ ...formData, mobile: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="c-subject"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Inquiry Subject / Department *
                    </label>
                    <select
                      id="c-subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-white"
                    >
                      {!["Sales & Project Quotation", "Engineering & Lux Calculations", "Accounts & Invoicing", "General & Administration"].includes(formData.subject) && (
                        <option value={formData.subject}>Quotation for: {formData.subject}</option>
                      )}
                      <option value="Sales & Project Quotation">
                        Sales Enquiries (sales@alkabirlighting.com)
                      </option>
                      <option value="Engineering & Lux Calculations">
                        Project &amp; Lux Calculations (projects@alkabirlighting.com)
                      </option>
                      <option value="Accounts & Invoicing">
                        Accounts Department (accounts@alkabirlighting.com)
                      </option>
                      <option value="General & Administration">
                        General Enquiries (admin@alkabirlighting.com)
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="c-message"
                      className="block text-xs font-semibold text-slate-700 mb-1"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={4}
                      placeholder="Please specify your project location, scope, fixture requirements, or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none resize-none"
                    />
                  </div>

                  {/* File Upload (Docx Page 11: Upload File) */}
                  <div className="border-2 border-dashed border-slate-200 hover:border-[#009ea9] rounded-2xl p-4 text-center transition-colors bg-slate-50/60">
                    <input
                      type="file"
                      id="c-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.xlsx,.xls,.dwg,.doc,.docx,.png,.jpg"
                    />
                    <label
                      htmlFor="c-upload"
                      className="flex flex-col items-center justify-center cursor-pointer gap-1"
                    >
                      <UploadCloud className="w-6 h-6 text-[#009ea9]" />
                      <span className="text-xs font-semibold text-slate-700">
                        {formData.fileName ? (
                          <span className="text-[#009ea9] flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            {formData.fileName}
                          </span>
                        ) : (
                          "Upload BOQ, Drawing, or Specification File"
                        )}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Accepted: PDF, XLSX, DWG, DOCX (Max 25MB)
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#009ea9] hover:bg-[#008791] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
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
              Visit Our Muscat Headquarters
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Conveniently situated on Sultan Qaboos Street in Al Khuwair.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white h-80 sm:h-96 relative">
            <iframe
              title="Al Kabir Lighting Muscat Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116986.72149586118!2d58.3496035!3d23.5932599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff24e23114d5%3A0x6b4fb712f5188f61!2sAl%20Khuwair%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2som!4v1699999999999!5m2!1sen!2som"
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
