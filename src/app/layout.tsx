import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Keyur Gondaliya - Full Stack Developer | AI, MERN, React Native, Electron, Cloud Expert",
  description:
    "Keyur Gondaliya is a full-stack developer with expertise in MERN, React Native, Electron, Azure, GCP, AWS, and a deep focus on AI, LLM APIs, and AI agents like Langchain, Hugging Face, and Crew AI. Experienced in real estate, fintech, CAD, ed-tech, big data, and more.",
  keywords:
    "AI freelance, MERN stack, React Native expert, Electron developer, Azure, GCP, AWS, Langchain, Hugging Face, Crew AI, LLM APIs, AI agents, real estate tech, fintech developer, big data solutions, CAD expert, ed-tech developer",
  openGraph: {
    type: "website",
    title:
      "Keyur Gondaliya - Full Stack Developer | AI, MERN, React Native, Electron, Cloud Expert",
    description:
      "Keyur Gondaliya, an expert in MERN, React Native, Electron, and AI technologies like Langchain, Hugging Face, and Crew AI, offers comprehensive development solutions for real estate, fintech, big data, CAD, and ed-tech industries.",
    url: "https://keyur-gondaliya.tech/",
    siteName: "Keyur Gondaliya - Full Stack Developer",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Keyur Gondaliya - Full Stack Developer | AI, MERN, React Native, Electron",
    description:
      "Specializing in AI and Full Stack Development, Keyur offers advanced solutions in AI, cloud, and app development for various industries.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.ico" sizes="any" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
