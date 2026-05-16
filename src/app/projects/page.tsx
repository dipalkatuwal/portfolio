import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PROJECTS } from "@/lib/data";
import ProjectList from "@/components/ui/ProjectList";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Dipal Katuwal",
  description: "A complete list of my engineering projects, case studies, and technical explorations.",
};

export default function AllProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <section className="max-w-[1040px] mx-auto px-6 ">
          <header className="mb-12">
            <Link
              href="/"
              className="font-mono text-[10px] uppercase tracking-[.12em] text-muted hover:text-accent transition-colors"
            >
              ← Back to home
            </Link>
            <h1 className="mt-4 font-playfair text-[42px] leading-tight text-ink">
              All Projects
            </h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[.12em] text-ink3">
              A collection of shipped products and technical research
            </p>
          </header>

          <ProjectList projects={PROJECTS} />
        </section>
      </main>
      <Footer />
    </>
  );
}
