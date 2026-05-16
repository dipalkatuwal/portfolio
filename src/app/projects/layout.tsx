import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dipal Katuwal",
  description: "A complete list of my engineering projects, case studies, and technical explorations.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
