"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, UploadCloud, FileText, Send, ArrowRight } from "lucide-react";

export default function QuoteModal({ isOpen, onClose, initialCategory = "" }) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    mobile: "",
    projectName: "",
    projectLocation: "Muscat, Oman",
    productCategory: initialCategory || "Indoor Lighting",
    requiredQuantity: "",
    deliveryDate: "",
    message: "",
    fileName: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");

  const [prevCategory, setPrevCategory] = useState(initialCategory);
  if (initialCategory !== prevCategory) {
    setPrevCategory(initialCategory);
    setFormData((prev) => ({
      ...prev,
      productCategory: initialCategory || "Indoor Lighting",
    }));
  }


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRfq = "AKL-RFQ-" + Math.floor(100000 + Math.random() * 900000);
      setRfqNumber(generatedRfq);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleFileSimulate = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files[0].name,
      }));
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rfq-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0f172a] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#009ea9] font-bold">
              Project Procurement & Supply
            </span>
            <h2 id="rfq-modal-title" className="text-xl font-bold tracking-tight">
              Request a Project Quotation (RFQ)
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009ea9]"
            aria-label="Close RFQ Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#e6f8fa] flex items-center justify-center text-[#009ea9]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                RFQ Successfully Received!
              </h3>
              <p className="text-sm font-semibold text-[#009ea9]">
                Reference ID: {rfqNumber}
              </p>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactPerson || "Valued Client"}</strong>.
                Our engineering and commercial sales team will review your project
                specifications and deliver a formal quotation within 24 to 48 hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#009ea9] hover:bg-[#008791] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-500 mb-2">
                Provide your project BOQ or specification details. Our commercial
                desk will prepare competitive pricing tailored to Oman standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Company Name */}
                <div>
                  <label
                    htmlFor="rfq-company"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Company / Organization Name *
                  </label>
                  <input
                    id="rfq-company"
                    type="text"
                    required
                    placeholder="e.g. Al Madina Contracting LLC"
                    value={formData.companyName}
                    onChange={(e) =>
                      setFormData({ ...formData, companyName: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label
                    htmlFor="rfq-contact"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Contact Person Name *
                  </label>
                  <input
                    id="rfq-contact"
                    type="text"
                    required
                    placeholder="e.g. Eng. Ahmed Al-Balushi"
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPerson: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="rfq-email"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    id="rfq-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label
                    htmlFor="rfq-mobile"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Mobile / WhatsApp *
                  </label>
                  <input
                    id="rfq-mobile"
                    type="tel"
                    required
                    placeholder="+968 9123 4567"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Project Name */}
                <div>
                  <label
                    htmlFor="rfq-project"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Project Name
                  </label>
                  <input
                    id="rfq-project"
                    type="text"
                    placeholder="e.g. Muscat Bay Commercial Phase 2"
                    value={formData.projectName}
                    onChange={(e) =>
                      setFormData({ ...formData, projectName: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Project Location */}
                <div>
                  <label
                    htmlFor="rfq-location"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Project Location / Governorate
                  </label>
                  <input
                    id="rfq-location"
                    type="text"
                    placeholder="Muscat, Sohar, Salalah, Nizwa, Duqm"
                    value={formData.projectLocation}
                    onChange={(e) =>
                      setFormData({ ...formData, projectLocation: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>

                {/* Product Category */}
                <div>
                  <label
                    htmlFor="rfq-category"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Primary Product Category
                  </label>
                  <select
                    id="rfq-category"
                    value={formData.productCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, productCategory: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none bg-white"
                  >
                    <option value="Indoor Lighting">Indoor Lighting</option>
                    <option value="Outdoor Lighting">Outdoor Lighting</option>
                    <option value="Industrial Lighting">Industrial Lighting</option>
                    <option value="Street Lighting">Street Lighting</option>
                    <option value="Emergency Lighting">Emergency Lighting</option>
                    <option value="Building Materials">Building Materials</option>
                    <option value="Complete BOQ Supply">Complete Turnkey BOQ Supply</option>
                  </select>
                </div>

                {/* Required Delivery Date */}
                <div>
                  <label
                    htmlFor="rfq-delivery"
                    className="block text-xs font-semibold text-slate-700 mb-1"
                  >
                    Expected Delivery Date / Quantity
                  </label>
                  <input
                    id="rfq-delivery"
                    type="text"
                    placeholder="e.g. 500 units by next month"
                    value={formData.deliveryDate}
                    onChange={(e) =>
                      setFormData({ ...formData, deliveryDate: e.target.value })
                    }
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none"
                  />
                </div>
              </div>

              {/* Message / Specifications */}
              <div>
                <label
                  htmlFor="rfq-message"
                  className="block text-xs font-semibold text-slate-700 mb-1"
                >
                  Message / Technical Requirements *
                </label>
                <textarea
                  id="rfq-message"
                  required
                  rows={3}
                  placeholder="Specify fixture wattages, CCT, IP rating, brands required, or project specifications..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#009ea9] focus:border-[#009ea9] outline-none resize-none"
                />
              </div>

              {/* BOQ / Drawing File Upload Simulation */}
              <div className="border-2 border-dashed border-slate-200 hover:border-[#009ea9] rounded-xl p-3 text-center transition-colors bg-slate-50/50">
                <input
                  type="file"
                  id="rfq-file"
                  className="hidden"
                  onChange={handleFileSimulate}
                  accept=".pdf,.xlsx,.xls,.dwg,.doc,.docx,.png,.jpg"
                />
                <label
                  htmlFor="rfq-file"
                  className="flex flex-col items-center justify-center cursor-pointer gap-1"
                >
                  <UploadCloud className="w-6 h-6 text-[#009ea9]" />
                  <span className="text-xs font-medium text-slate-700">
                    {formData.fileName ? (
                      <span className="text-[#009ea9] font-bold flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> {formData.fileName}
                      </span>
                    ) : (
                      "Attach BOQ, Excel, PDF, DWG Drawing or Specification"
                    )}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Max size 25MB (PDF, XLSX, DWG, DOCX)
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl text-sm font-bold text-white bg-[#009ea9] hover:bg-[#008791] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>SUBMIT RFQ</span>
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
  );
}
