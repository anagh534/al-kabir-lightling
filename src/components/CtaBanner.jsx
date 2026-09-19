import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <ScrollReveal direction="up" distance={30} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-slate-900">
          Ready to Discuss Your Project Specifications?
        </h2>
        <p className="text-sm text-slate-500 max-w-xl mx-auto">
          Contact our engineering specialists or submit your BOQ documents for
          a fast, transparent, and competitive commercial quotation.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#009ea9] hover:bg-[#00858f] shadow-md transition-all group"
          >
            <span>Contact Commercial Team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
