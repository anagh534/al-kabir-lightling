"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function SiteLayout({ children }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState("");

  const handleOpenQuote = (category = "") => {
    setQuoteCategory(typeof category === "string" ? category : "");
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuoteCategory("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#e6f8fa] selection:text-[#009ea9]">
      <TopBar />
      <Header onRequestQuote={() => handleOpenQuote()} />
      <main className="flex-1">{children}</main>
      <Footer onRequestQuote={() => handleOpenQuote()} />
      <FloatingWhatsApp />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        initialCategory={quoteCategory}
      />
    </div>
  );
}
