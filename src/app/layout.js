import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://alkabirlighting.com"),
  title: {
    default: "Al Kabir Lighting | Lighting, Electrical & Building Material Solutions in Oman",
    template: "%s | Al Kabir Lighting Oman",
  },
  description:
    "Leading Oman supplier of architectural, commercial, outdoor, and industrial lighting, electrical switchgear, cables, and building materials. Trusted partner for major projects across the Sultanate.",
  keywords: [
    "Al Kabir Lighting",
    "Lighting Suppliers Oman",
    "Commercial Lighting Muscat",
    "Industrial Lighting Oman",
    "Building Materials Oman",
    "Philips Lighting Oman",
    "Schneider Electric Oman",
    "LED Street Lights Muscat",
    "Explosion Proof Lighting Oman",
    "Electrical Cables Oman",
    "Project Supply Oman",
  ],
  authors: [{ name: "Al Kabir Lighting LLC" }],
  creator: "Al Kabir Lighting LLC",
  publisher: "Al Kabir Lighting LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Al Kabir Lighting | One Partner. Multiple Solutions.",
    description:
      "Supplying quality lighting, electrical, and building material products across Oman for a brighter, smarter tomorrow.",
    url: "https://alkabirlighting.com",
    siteName: "Al Kabir Lighting",
    images: [
      {
        url: "/images/hero-showroom.jpg",
        width: 1200,
        height: 630,
        alt: "Al Kabir Lighting Oman Showroom & Products",
      },
    ],
    locale: "en_OM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Kabir Lighting | Lighting, Electrical & Building Materials Oman",
    description:
      "Supplying quality lighting, electrical, and building material products across Oman.",
    images: ["/images/hero-showroom.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
  sameAs: [
    "https://linkedin.com/company/alkabirlighting",
    "https://facebook.com/alkabirlighting",
    "https://instagram.com/alkabirlighting",
  ],
  areaServed: ["Oman", "GCC"],
  description:
    "Professional lighting, electrical and building material solutions for commercial, industrial, infrastructure, residential and government projects across Oman.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
