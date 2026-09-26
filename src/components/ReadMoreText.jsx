"use client";
import { useState } from "react";

export default function ReadMoreText({ text, maxChars = 200 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text || text.length <= maxChars) {
    return <span>{text}</span>;
  }

  const displayText = isExpanded ? text : text.slice(0, maxChars).trim() + "...";

  return (
    <div>
      <span className="transition-all duration-300">{displayText}</span>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#009ea9] font-semibold hover:text-[#00e5f2] mt-2 inline-flex items-center gap-1 text-sm focus:outline-none transition-colors"
      >
        {isExpanded ? "Read Less" : "Read More"}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
