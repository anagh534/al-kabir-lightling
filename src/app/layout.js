import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://alkabirlighting.com"),
  title: {
    default: "Al Kabir Lighting | Premium Architectural, Industrial & Infrastructure Solutions in Oman",
    template: "%s | Al Kabir Lighting Oman",
  },
  description:
    "Al Kabir Lighting is an Oman-based leader in architectural lighting, industrial luminaires, power distribution cables, and high-performance building materials for major commercial and infrastructure projects.",
  keywords: [
    "Al Kabir Lighting",
    "Architectural Lighting Oman",
    "Commercial Lighting Muscat",
    "Industrial Lighting Oman",
    "Building Materials Oman",
    "Philips Lighting Oman",
    "Schneider Electric Oman",
    "LED Street Lighting Oman",
    "Explosion Proof Lighting ATEX",
    "Dialux Lux Calculations Oman",
  ],
  authors: [{ name: "Al Kabir Lighting LLC" }],
  creator: "Al Kabir Lighting LLC",
  publisher: "Al Kabir Lighting LLC",
  openGraph: {
    title: "Al Kabir Lighting | Architectural & Project Solutions Oman",
    description:
      "Supplying quality lighting, electrical, and building material solutions across Oman for commercial, industrial, and infrastructure developments.",
    url: "https://alkabirlighting.com",
    siteName: "Al Kabir Lighting",
    images: [
      {
        url: "/images/hero-lighting.jpg",
        width: 1920,
        height: 1080,
        alt: "Al Kabir Lighting Oman Showroom & Architectural Projects",
      },
    ],
    locale: "en_OM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Kabir Lighting | Lighting & Building Material Solutions Oman",
    description:
      "Premium lighting, electrical, and project supply across the Sultanate of Oman.",
    images: ["/images/hero-lighting.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Al Kabir Lighting",
  legalName: "Al Kabir Lighting & Trading LLC",
  image: "https://alkabirlighting.com/logo.png",
  url: "https://alkabirlighting.com",
  telephone: "+96824567890",
  email: "info@alkabirlighting.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sultan Qaboos Street, Al Khuwair",
    addressLocality: "Muscat",
    addressRegion: "Muscat Governorate",
    postalCode: "1234",
    addressCountry: "OM",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.5933",
    longitude: "58.4218",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: ["Oman", "GCC"],
  description:
    "Professional architectural lighting, electrical and building material solutions for commercial, industrial, infrastructure, and residential projects across Oman.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-slate-900 bg-white">
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
              }, 'google_translate_element');
            }
          `}
        </Script>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
