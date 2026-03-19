import type { Metadata } from "next";
import "@/app/globals.css";
import AmbientGoldParticles from "@/public/components/ui/ParticlesEffect";
import Navbar from "@/public/components/ui-b/Navbar";
import Footer from "@/public/components/ui/Footer";
import ChatWidget from "@/public/components/ui-b/ChatWidget";

export const metadata: Metadata = {
  title: "Do-Minus | Luxury Stays",
  description: "Developed by North Star Group",
  icons: {
    icon: "/D.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AmbientGoldParticles />
        <Navbar />
        <ChatWidget />
        {children}

        <Footer />
      </body>
    </html>
  );
}
