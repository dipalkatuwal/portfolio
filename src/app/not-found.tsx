import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Dipal Katuwal",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-[600px] mx-auto px-6 py-32 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[.12em] text-muted mb-4">
            404 — Not Found
          </p>
          <h1 className="font-playfair italic text-[48px] text-ink mb-4">
            Page not found.
          </h1>
          <p className="font-mono text-[13px] text-mid mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block font-mono text-[11px] uppercase tracking-widest border border-ink px-6 py-3 text-ink hover:bg-ink hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
