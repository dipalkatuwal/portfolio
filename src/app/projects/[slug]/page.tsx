import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyContent from "@/components/features/CaseStudyContent";
import { Metadata } from "next";
import { BASE_URL } from "@/lib/config";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const projectUrl = `${BASE_URL}/projects/${slug}`;

  return {
    title: `${project.title} — Case Study | Dipal Katuwal`,
    description: project.desc,
    authors: [{ name: "Dipal Katuwal", url: BASE_URL }],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Dipal Katuwal`,
      description: project.desc,
      type: "article",
      url: projectUrl,
      siteName: "Dipal Katuwal",
      locale: "en_US",
      authors: ["Dipal Katuwal"],
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${project.title} — Project by Dipal Katuwal`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.desc,
      creator: "@dipalkatuwal",
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectUrl = `${BASE_URL}/projects/${slug}`;

  // Per-project SoftwareApplication JSON-LD
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.desc,
    url: projectUrl,
    author: {
      "@type": "Person",
      name: "Dipal Katuwal",
      url: BASE_URL,
    },
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    ...(project.liveDemo ? { sameAs: project.liveDemo } : {}),
    ...(project.github ? { codeRepository: project.github } : {}),
    programmingLanguage: project.tags,
    inLanguage: "en",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
        <CaseStudyContent project={project} />
      </main>
      <Footer />
    </>
  );
}
