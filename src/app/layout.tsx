import type { Metadata } from "next";
import {
  Playfair_Display,
  Courier_Prime,
  Share_Tech_Mono,
  VT323,
} from "next/font/google";
import "./globals.css";

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

const BASE_URL = "https://dipalkatuwal.com.np";

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
    type: "website",
    url: BASE_URL,
    siteName: "Dipal Katuwal",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dipal Katuwal — Full Stack Developer in Nepal",
    description:
      "Full Stack Developer from Nepal. MERN · AI Integrations · TypeScript · Next.js",
    creator: "@dipalkatuwal",
    site: "@dipalkatuwal",
  },

  // Verification — add your actual codes here after verifying on each platform
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    // yandex: "ADD_IF_NEEDED",
  },

  category: "technology",
};

// JSON-LD structured data — tells Google exactly who this person is
// This is what powers the knowledge panel when someone searches "Dipal Katuwal"
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Dipal Katuwal",
      url: BASE_URL,
      image: `${BASE_URL}/dipal-katuwal.jpg`,
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer from Nepal specializing in MERN stack, AI integrations, and data-heavy web applications.",
      email: "dipalkatuwal07@gmail.com",
      nationality: "Nepali",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Mahendra Morang Adarsha Multiple Campus, Tribhuvan University",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Biratnagar",
          addressCountry: "NP",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "NP",
      },
      sameAs: [
        "https://github.com/dipalkatuwal",
        "https://linkedin.com/in/dipalkatuwal",
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
      ],
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
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/projects?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
      className={`${playfair.variable} ${courierPrime.variable} ${shareTechMono.variable} ${vt323.variable}`}
    >
      <head>
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