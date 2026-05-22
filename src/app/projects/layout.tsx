import { Metadata } from "next";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of full-stack engineering projects by Dipal Katuwal — NepseSage (NEPSE AI platform), PasalBot (conversational commerce), NEPSE Prediction Portal (ML forecasting), and more.",
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: "Projects — Dipal Katuwal",
    description:
      "Full-stack engineering projects by Dipal Katuwal: NepseSage, PasalBot, NEPSE Prediction Portal, and more.",
    type: "website",
    url: `${BASE_URL}/projects`,
    siteName: "Dipal Katuwal",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Projects by Dipal Katuwal",
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
