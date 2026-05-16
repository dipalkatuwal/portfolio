import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dipal Katuwal — Full Stack Developer",
  description:
    "Full Stack Developer focused on MERN applications, AI integrations, and data-heavy interfaces built for the Nepali market.",
  keywords: ["Full Stack Developer", "MERN", "Nepal", "React", "Node.js", "Dipal Katuwal"],
  authors: [{ name: "Dipal Katuwal" }],
  openGraph: {
    title: "Dipal Katuwal — Full Stack Developer",
    description:
      "Building fast, data-heavy web products for the Nepali market — Full-stack applications, AI-powered interfaces, and systems that actually make sense to use.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=VT323&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}