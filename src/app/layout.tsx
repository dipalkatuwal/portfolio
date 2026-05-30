import type { Metadata } from "next";
import {
  Playfair_Display,
  Courier_Prime,
  Share_Tech_Mono,
  VT323,
} from "next/font/google";
import "./globals.css";
import { BASE_URL } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "optional",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
  display: "optional",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech",
  display: "optional",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Dipal Katuwal — Full Stack Developer in Nepal",
    template: "%s | Dipal Katuwal",
  },

  description:
    "Dipal Katuwal is a Full Stack Developer from Nepal specializing in MERN stack applications, AI integrations, and data-heavy web platforms. Computer Science student at TU, Biratnagar.",

  keywords: [
    // Name variants — what people actually type
    "Dipal Katuwal",
    "dipal katuwal",
    "Dipal Katuwal developer",
    "Dipal Katuwal Nepal",
    "Dipal Katuwal portfolio",
    "Dipal Katuwal full stack",
    "Dipal Katuwal CSIT",
    "Dipal Katuwal Biratnagar",
    // Role + location combos
    "Full Stack Developer Nepal",
    "Full Stack Developer Biratnagar",
    "Web Developer Nepal",
    "MERN Stack Developer Nepal",
    "React Developer Nepal",
    "Node.js Developer Nepal",
    "Next.js Developer Nepal",
    // Skills
    "MERN Stack",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Python",
    "TensorFlow",
    "AI integrations",
    "Machine Learning Nepal",
    // Project names — people may search these
    "NepseSage",
    "PasalBot",
    "NEPSE stock prediction",
    // Context
    "TU CSIT developer",
    "Mahendra Morang developer",
    "Nepali developer portfolio",
  ],

  authors: [{ name: "Dipal Katuwal", url: BASE_URL }],
  creator: "Dipal Katuwal",
  publisher: "Dipal Katuwal",

  // Canonical always points to the real domain
  alternates: {
    canonical: BASE_URL,
  },

  // Tells crawlers this is the definitive URL
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

  openGraph: {
    title: "Dipal Katuwal — Full Stack Developer in Nepal",
    description:
      "Full Stack Developer from Nepal building MERN applications, AI-powered tools, and data-heavy web platforms. Check out NepseSage, PasalBot, and more.",
    type: "profile",
    url: BASE_URL,
    siteName: "Dipal Katuwal",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Dipal Katuwal — Full Stack Developer in Nepal",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dipal Katuwal — Full Stack Developer in Nepal",
    description:
      "Full Stack Developer from Nepal. MERN · AI Integrations · TypeScript · Next.js",
    creator: "@dipalkatuwal",
    site: "@dipalkatuwal",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        alt: "Dipal Katuwal — Full Stack Developer in Nepal",
      },
    ],
  },

  

  // Geo signals help Google understand this is a Nepal-based developer
  other: {
    "geo.region": "NP-P1",
    "geo.placename": "Biratnagar, Nepal",
    "geo.position": "26.4525;87.2718",
    ICBM: "26.4525, 87.2718",
    // Canonical social profiles for entity disambiguation
    "profile:first_name": "Dipal",
    "profile:last_name": "Katuwal",
    "profile:username": "dipalkatuwal",
  },

  category: "technology",
};

// JSON-LD structured data — tells Google exactly who this person is
// This is what powers the knowledge panel when someone searches "Dipal Katuwal"
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Person", "ProfilePage"],
      "@id": `${BASE_URL}/#person`,
        mainEntity: {            
        "@type": "Person",       
        name: "Dipal Katuwal",   
      },
      name: "Dipal Katuwal",
      givenName: "Dipal",
      familyName: "Katuwal",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
        width: 800,
        height: 800,
        caption: "Dipal Katuwal — Full Stack Developer from Nepal",
      },
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer from Nepal specializing in MERN stack, AI integrations, and data-heavy web applications. Building tools for the Nepali market.",
      email: "dipalkatuwal07@gmail.com",
      nationality: {
        "@type": "Country",
        name: "Nepal",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Mahendra Morang Adarsha Multiple Campus, Tribhuvan University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Biratnagar",
          addressRegion: "Province No. 1",
          addressCountry: "NP",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Biratnagar",
        addressCountry: "NP",
      },
      sameAs: [
        "https://github.com/dipalkatuwal",
        "https://www.linkedin.com/in/dipalkatuwal",
        BASE_URL,
      ],
      knowsAbout: [
        "Full Stack Development",
        "MERN Stack",
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "Python",
        "Machine Learning",
        "TensorFlow",
        "AI Integrations",
        "MongoDB",
        "PostgreSQL",
        "Nepal Stock Exchange",
        "NEPSE",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "Country",
          name: "Nepal",
        },
        skills: "MERN Stack, React, Node.js, Next.js, TypeScript, Python, TensorFlow",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dipal Katuwal — Portfolio",
      description: "Portfolio website of Dipal Katuwal, Full Stack Developer from Nepal.",
      publisher: {
        "@id": `${BASE_URL}/#person`,
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/projects?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ItemList",
      name: "Projects by Dipal Katuwal",
      description: "Software projects built by Dipal Katuwal, Full Stack Developer from Nepal.",
      url: `${BASE_URL}/projects`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "NepseSage — NEPSE Stock Market Analysis Platform",
          description:
            "Professional-grade AI-driven analysis platform for Nepal Stock Exchange investors. Built with Next.js 15, Express.js, MongoDB, and OpenAI.",
          url: `${BASE_URL}/projects/nepse-sage`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "PasalBot — Conversational Commerce for Nepali Sellers",
          description:
            "NLP-powered chat-driven commerce platform for Nepali social media sellers. Built with MERN stack.",
          url: `${BASE_URL}/projects/pasal-bot`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "NEPSE Prediction Portal — ML Stock Forecasting",
          description:
            "LSTM-based machine learning model for NEPSE stock price prediction using TensorFlow and Python.",
          url: `${BASE_URL}/projects/nepse-predictor`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${courierPrime.variable} ${shareTechMono.variable} ${vt323.variable}`}
    >
      <head>
        {/* Preconnect to Google Fonts for faster LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* rel="me" links — help search engines confirm identity across profiles */}
        <link rel="me" href="https://github.com/dipalkatuwal" />
        <link rel="me" href="https://www.linkedin.com/in/dipalkatuwal" />
        <link rel="me" href={`mailto:dipalkatuwal07@gmail.com`} />

        {/* JSON-LD structured data for Google Knowledge Panel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
