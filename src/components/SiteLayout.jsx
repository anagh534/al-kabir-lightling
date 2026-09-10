"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function SiteLayout({ children }) {
  const router = useRouter();

  const handleOpenQuote = (category = "General Inquiry") => {
    const subject = typeof category === "string" ? category : "General Inquiry";
    router.push(`/contact?subject=${encodeURIComponent(subject)}#quote-form`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#e6f8fa] selection:text-[#009ea9]">
      <TopBar />
      <Header onRequestQuote={() => handleOpenQuote()} />
      <main className="flex-1">{children}</main>
      <Footer onRequestQuote={() => handleOpenQuote()} />
      <FloatingWhatsApp />
    </div>
  );
}
